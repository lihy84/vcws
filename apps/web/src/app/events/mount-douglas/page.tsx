"use client";

import { EventStory } from "@/components/EventStory";
import { copy } from "@vcws/content/vcws";

export default function MountDouglasForumPage() {
  return <EventStory event={copy.events.forum} />;
}
