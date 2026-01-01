export default function GallerySection() {
  return (
    <section
      id='gallery'
      className='min-h-screen bg-(--color-background) text-text flex items-center justify-center px-6 py-24'
    >
      <div className='max-w-2xl space-y-3 text-center'>
        <h2 className='text-2xl sm:text-3xl font-(--font-display) text-primary'>
          Gallery
        </h2>
        <p className='text-primary/80'>
          Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </section>
  );
}
