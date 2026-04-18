import { MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";

export default function ContactForm() {
  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <form
        action={`mailto:${siteConfig.email}`}
        className="grid gap-5"
        encType="text/plain"
        method="post"
      >
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+918368137724" required type="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about the workflow, SaaS platform, or AI system you want to build."
            required
          />
        </div>
        <Button size="lg" type="submit">
          Send project brief
          <Send />
        </Button>
      </form>
      <Button asChild className="mt-3 w-full" size="lg" variant="outline">
        <a href={siteConfig.whatsappUrl} rel="noreferrer" target="_blank">
          <MessageCircle />
          Continue on WhatsApp
        </a>
      </Button>
    </div>
  );
}
