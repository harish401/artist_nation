'use client';

import dynamic from 'next/dynamic';

const EventStageModel = dynamic(
  () => import('./event-stage-model').then((mod) => mod.EventStageModel),
  {
    ssr: false,
    loading: () => (
      <div className="event-stage-model event-stage-model-loading" aria-hidden="true">
        <span />
      </div>
    ),
  },
);

export function LazyEventStageModel() {
  return <EventStageModel />;
}
