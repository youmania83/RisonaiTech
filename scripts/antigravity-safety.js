/**
 * Antigravity Safety Guardrails & Monitoring System
 * 
 * Provides runtime checks for memory limits, CPU metrics, execution timeouts, 
 * and recursive loop detection to ensure development and agent operations run
 * safely on a 16GB MacBook Air.
 */

const os = require("os");
const fs = require("fs");
const path = require("path");

// --- Configuration ---
const CONFIG = {
  maxRssMb: 4096,             // Increased to 4GB for better stability
  maxCpuLoadPercent: 95,      // Be more lenient with CPU saturation
  maxFilesPerAnalysis: 100,    // Increased from 20 to 100 to allow full codebase scans
  maxRecursiveDepth: 5,       // Increased depth for complex planning
  defaultTimeoutMs: 600000,   // Increased to 10 minutes
};

// --- Execution State Tracking ---
const state = {
  startTime: Date.now(),
  scannedFiles: new Set(),
  scanCounts: new Map(),      // Track how many times each file is scanned
  taskHistory: [],            // Track task execution names
  recursionDepth: 0,
};

/**
 * Checks system memory usage and terminates if limits are exceeded.
 */
function checkMemoryUsage() {
  const memoryUsage = process.memoryUsage();
  const rssMb = Math.round(memoryUsage.rss / (1024 * 1024));
  const heapUsedMb = Math.round(memoryUsage.heapUsed / (1024 * 1024));
  
  console.log(`[Safety Monitor] RSS Memory: ${rssMb}MB | Heap Used: ${heapUsedMb}MB`);
  
  if (rssMb > CONFIG.maxRssMb) {
    console.error(`[Safety Error] Memory usage exceeded safety limit of ${CONFIG.maxRssMb}MB (Current: ${rssMb}MB). Terminating process to prevent system freeze.`);
    process.exit(1);
  }
  return { rssMb, heapUsedMb };
}

/**
 * Checks CPU load of the system.
 */
function checkCpuLoad() {
  const cpus = os.cpus();
  const load = os.loadavg();
  const numCpus = cpus.length;
  // load[0] is 1-minute load average. If it's higher than numCpus, CPU is 100%+ saturated.
  const loadPercentage = Math.round((load[0] / numCpus) * 100);
  
  console.log(`[Safety Monitor] CPU Load (1-min avg): ${loadPercentage}% | System CPUs: ${numCpus}`);
  
  if (loadPercentage > CONFIG.maxCpuLoadPercent) {
    console.warn(`[Safety Warning] High CPU load detected: ${loadPercentage}%. Recommend pausing heavy tasks.`);
  }
  return loadPercentage;
}

/**
 * Enforces execution timeout.
 */
function enforceTimeout(timeoutMs = CONFIG.defaultTimeoutMs) {
  const elapsed = Date.now() - state.startTime;
  if (elapsed > timeoutMs) {
    console.error(`[Safety Error] Execution timeout of ${timeoutMs}ms exceeded. Automatically terminating task to prevent infinite execution.`);
    process.exit(1);
  }
}

/**
 * Registers a file scan and checks for recursive scan loops.
 * @param {string} filePath - Path of the file being processed.
 */
function registerFileScan(filePath) {
  const normalized = path.resolve(filePath);
  
  // Update scan counters
  const currentCount = (state.scanCounts.get(normalized) || 0) + 1;
  state.scanCounts.set(normalized, currentCount);
  state.scannedFiles.add(normalized);
  
  // Check if we exceed scan threshold per file (e.g. scanning same file more than 3 times is an anomaly)
  if (currentCount > 3) {
    console.error(`[Safety Error] Loop detected: File "${filePath}" has been scanned ${currentCount} times in a single execution. Terminating process.`);
    process.exit(1);
  }
  
  // Check batch size limits
  if (state.scannedFiles.size > CONFIG.maxFilesPerAnalysis) {
    console.error(`[Safety Error] Exceeded batch analysis limit of ${CONFIG.maxFilesPerAnalysis} files (Attempted: ${state.scannedFiles.size} files). Terminating to keep memory footprint small.`);
    process.exit(1);
  }
}

/**
 * Enforces task depth limits and detects planning loops.
 * @param {string} taskName - Name of the task or step.
 */
function registerTaskStep(taskName) {
  state.taskHistory.push({ name: taskName, timestamp: Date.now() });
  
  // Detect repeated execution of the exact same task
  const lastThreeTasks = state.taskHistory.slice(-3);
  if (lastThreeTasks.length === 3 && 
      lastThreeTasks[0].name === taskName && 
      lastThreeTasks[1].name === taskName && 
      lastThreeTasks[2].name === taskName) {
    console.error(`[Safety Error] Endless execution loop detected for task: "${taskName}". Terminating immediately.`);
    process.exit(1);
  }
}

/**
 * Updates recursion depth.
 * @param {number} delta - Change in depth (+1 or -1)
 */
function updateRecursionDepth(delta) {
  state.recursionDepth += delta;
  console.log(`[Safety Monitor] Current agent recursion depth: ${state.recursionDepth}/${CONFIG.maxRecursiveDepth}`);
  if (state.recursionDepth > CONFIG.maxRecursiveDepth) {
    console.error(`[Safety Error] Recursion depth limit of ${CONFIG.maxRecursiveDepth} exceeded. Terminating to prevent stack overflow.`);
    process.exit(1);
  }
}

// Start periodic checks
let monitorInterval = null;
function startMonitor(intervalMs = 5000) {
  console.log(`[Safety System] Guardrails initialized. RSS limit: ${CONFIG.maxRssMb}MB | Scan limit: ${CONFIG.maxFilesPerAnalysis} files.`);
  
  // Initial check
  checkMemoryUsage();
  
  monitorInterval = setInterval(() => {
    checkMemoryUsage();
    checkCpuLoad();
    enforceTimeout();
  }, intervalMs);
  
  // Ensure we don't hold the event loop open if there's no other work
  if (monitorInterval.unref) {
    monitorInterval.unref();
  }
}

function stopMonitor() {
  if (monitorInterval) {
    clearInterval(monitorInterval);
  }
}

module.exports = {
  CONFIG,
  state,
  checkMemoryUsage,
  checkCpuLoad,
  registerFileScan,
  registerTaskStep,
  updateRecursionDepth,
  startMonitor,
  stopMonitor,
};
