import './imagegrid.css';

export interface ImageGridProps {
	costInHours: number,
  firstImageSrc: string;
  firstImageAlt: string;
  onCompact: boolean;
}

export const createImageGrid = ({ costInHours, firstImageSrc, firstImageAlt, onCompact }: ImageGridProps) => {
  const imageGrid = document.createElement('section');

  if(onCompact) {
	imageGrid.className = "section section--media section--black section--grid section--gallery section--gallery-one section--gallery-compact";
  } else {
	imageGrid.className = "section section--media section--black section--grid section--gallery section--gallery-one";
  }


  const images = [
    {
      src: firstImageSrc,
      alt: firstImageAlt,
    },
    {
      src: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42499/BarbaraTrienenPhoto_024A1028Stimmt_sfeer_okt240048.webp",
      alt: "Collega Demi aan het werk",
    },
    {
      src: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/13694/024A0822_BarbaraTrienenPhoto_Stimmt_Sfeer11mei2023.webp",
      alt: " ",
    },
    {
      src: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42498/BarbaraTrienenPhoto_024A1025Stimmt_sfeer_okt240047.webp",
      alt: "Collega Jairo aan het werk",
    },
    {
      src: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/29339/024A0161_BarbaraTrienenPhotoStimmt_amsterdam00087_2024-02-01-091753_wfep.webp",
      alt: "Collega's lunchen samen op kantoor Amsterdam.",
    },
    {
      src: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/29239/024A1752_BarbaraTrienenPhoto_Stimmt_Sfeer11mei2023.webp",
      alt: "Collega Robbin in overleg op kantoor Enschede.",
    },
    {
      src: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42510/BarbaraTrienenPhoto_024A1186Stimmt_sfeer_okt240080.webp",
      alt: "Sfeerimpressie kantoor Enschede",
    },
  ];

  imageGrid.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="gallery">
            <div class="gallery__col">
              <div class="gallery__gallery">
                ${images.map(image => `
                  <div class="gallery__img">
                    <picture>
                      <source srcset="${image.src}" media="(max-width: 300px)" />
                      <source srcset="${image.src}" media="(max-width: 768px)" />
                      <img src="${image.src}" width="200" height="200" alt="${image.alt}" loading="lazy" />
                    </picture>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return imageGrid;
};