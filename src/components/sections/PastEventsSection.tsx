export default function PastEventsSection() {
  return (
    <section
      id='past-events'
      className='min-h-screen bg-(--color-surface) text-text flex items-center justify-center px-6 py-24'
    >
      <div className='max-w-2xl space-y-3 text-center'>
        <h2 className='text-2xl sm:text-3xl font-(--font-display) text-primary'>
          Past Events
        </h2>
        <p className='text-primary/80'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
    </section>
  );
}
