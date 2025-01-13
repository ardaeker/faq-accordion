import { getImageProps } from 'next/image';

export function BackgroundPattern() {
  const common = { alt: ' ', fill: true, priority: true, sizes: '100vw' };
  const {
    props: { src: mobilePattern },
  } = getImageProps({ ...common, src: '/background-pattern-mobile.svg' });
  const {
    props: { src: desktopPattern, ...rest },
  } = getImageProps({ ...common, src: '/background-pattern-desktop.svg' });

  return (
    <div className="absolute left-0 right-0 top-0 h-60 sm:h-80">
      <picture>
        <source media="(max-width: 640px)" srcSet={mobilePattern} />
        <source media="(min-width: 641px)" srcSet={desktopPattern} />
        <img className="object-cover" {...rest} />
      </picture>
    </div>
  );
}
