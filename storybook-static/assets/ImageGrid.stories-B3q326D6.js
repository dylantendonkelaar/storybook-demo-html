const f=({costInHours:o,firstImageSrc:d,firstImageAlt:_,onCompact:p})=>{const e=document.createElement("section");p?e.className="section section--media section--black section--grid section--gallery section--gallery-one section--gallery-compact":e.className="section section--media section--black section--grid section--gallery section--gallery-one";const u=[{src:d,alt:_},{src:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42499/BarbaraTrienenPhoto_024A1028Stimmt_sfeer_okt240048.webp",alt:"Collega Demi aan het werk"},{src:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/13694/024A0822_BarbaraTrienenPhoto_Stimmt_Sfeer11mei2023.webp",alt:" "},{src:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42498/BarbaraTrienenPhoto_024A1025Stimmt_sfeer_okt240047.webp",alt:"Collega Jairo aan het werk"},{src:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/29339/024A0161_BarbaraTrienenPhotoStimmt_amsterdam00087_2024-02-01-091753_wfep.webp",alt:"Collega's lunchen samen op kantoor Amsterdam."},{src:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/29239/024A1752_BarbaraTrienenPhoto_Stimmt_Sfeer11mei2023.webp",alt:"Collega Robbin in overleg op kantoor Enschede."},{src:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42510/BarbaraTrienenPhoto_024A1186Stimmt_sfeer_okt240080.webp",alt:"Sfeerimpressie kantoor Enschede"}];return e.innerHTML=`
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="gallery">
            <div class="gallery__col">
              <div class="gallery__gallery">
                ${u.map(r=>`
                  <div class="gallery__img">
                    <picture>
                      <source srcset="${r.src}" media="(max-width: 300px)" />
                      <source srcset="${r.src}" media="(max-width: 768px)" />
                      <img src="${r.src}" width="200" height="200" alt="${r.alt}" loading="lazy" />
                    </picture>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,e},g={title:"Example/ImageGrid",tags:["autodocs","CraftCMS","Shopify","WordPress","Magento2"],render:o=>f(o),parameters:{layout:"fullscreen",docs:{source:{type:"auto"}}},args:{costInHours:25,firstImageSrc:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42344/BarbaraTrienenPhoto_024A0914Stimmt_sfeer_okt240022.webp",firstImageAlt:"Sfeerimpressie kantoor Enschede",onCompact:!1},argTypes:{costInHours:{control:"number"},firstImageSrc:{control:"text"},firstImageAlt:{control:"text"}}},t={args:{costInHours:25,firstImageSrc:"https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42344/BarbaraTrienenPhoto_024A0914Stimmt_sfeer_okt240022.webp",firstImageAlt:"Sfeerimpressie kantoor Enschede",onCompact:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/5aPCaC6B8bSCmvpf0wal7X/Untitled?node-id=0-1&t=16fQWYHsdoPSU19b-1"}}},n={args:{onCompact:!0}};var s,a,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    costInHours: 25,
    firstImageSrc: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42344/BarbaraTrienenPhoto_024A0914Stimmt_sfeer_okt240022.webp",
    firstImageAlt: "Sfeerimpressie kantoor Enschede",
    onCompact: false
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/5aPCaC6B8bSCmvpf0wal7X/Untitled?node-id=0-1&t=16fQWYHsdoPSU19b-1"
    }
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onCompact: true
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const h=["Default","Compact"];export{n as Compact,t as Default,h as __namedExportsOrder,g as default};
