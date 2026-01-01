export default function TestimonialsSection() {
  return (
    <section
      id='testimonials'
      className='min-h-screen bg-(--color-background) text-text flex items-center justify-center px-6 py-24'
    >
      <div className='max-w-2xl space-y-3 text-center'>
        <h2 className='text-2xl sm:text-3xl font-(--font-display) text-primary'>
          Testimonials
        </h2>
        <p className='text-primary/80'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
