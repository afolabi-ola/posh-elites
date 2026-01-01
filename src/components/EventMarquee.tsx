const MARQUEE_TEXT = 'UPCOMING EVENT 🎉 FLIRT & FIRE';

// export function EventMarquee() {
//   const marqueeItems = Array.from({ length: 8 }, () => MARQUEE_TEXT);

//   return (
//     <div className='w-full bg-transparent py-4 space-y-3'>
//       {/* Top Marquee - Outlined Text, 80% width */}
//       <div className='w-4/5 mx-auto overflow-hidden'>
//         <div className='marquee'>
//           {[0, 1].map((track) => (
//             <div
//               key={track}
//               className={`marquee-track ${
//                 track === 1 ? 'marquee-track--alt' : ''
//               }
//               `}
//               aria-hidden={track === 1}
//             >
//               {marqueeItems.map((item, index) => (
//                 <span
//                   key={`${track}-${index}`}
//                   className='inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.28em] uppercase text-transparent'
//                   style={{
//                     WebkitTextStroke: '1.5px var(--color-primary)',
//                     // textStroke: '1.5px var(--color-primary)',
//                   }}
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Marquee - Filled Text, Full width */}
//       <div className='w-full overflow-hidden'>
//         <div className='marquee'>
//           {[0, 1].map((track) => (
//             <div
//               key={track}
//               className={`marquee-track ${
//                 track === 1 ? 'marquee-track--alt' : ''
//               }`}
//               aria-hidden={track === 1}
//             >
//               {marqueeItems.map((item, index) => (
//                 <span
//                   key={`${track}-${index}`}
//                   className='inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.28em] uppercase text-primary'
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
export function EventMarquee() {
  const marqueeItems = Array.from({ length: 8 }, () => MARQUEE_TEXT);

  return (
    <div className='w-full bg-transparent space-y-3'>
      {/* Top Marquee - Outlined Text, 80% width */}
      <div className='w-full mx-auto overflow-hidden'>
        <div className='marquee max-w-[85%] bg-secondary/50'>
          <div className={`marquee-track-reverse`}>
            {marqueeItems.map((item, index) => (
              <span
                key={`${index}`}
                className='inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base md:text-4xl lg:text-4xl font-bold tracking-[0.28em] uppercase text-transparent'
                style={{
                  WebkitTextStroke: '1.5px var(--color-primary)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
          {/* ))} */}
        </div>
      </div>

      {/* Bottom Marquee - Filled Text, Full width */}
      <div className='w-full overflow-hidden flex justify-end'>
        <div className='marquee max-w-[85%]  bg-secondary/40'>
          <div className={`marquee-track`}>
            {marqueeItems.map((item, index) => (
              <span
                key={`${index}`}
                className='inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base md:text-4xl lg:text-4xl font-bold tracking-[0.28em] uppercase text-text'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
