import svgPaths from "./svg-07cx6h89cq";
import imgBurgerBar1 from "figma:asset/905691acc3a88deacb4e83ba6e0f7e7e1e2f0ff3.png";

function Component01ImagesAvatar() {
  return (
    <div className="h-[37px] relative shrink-0 w-[38px]" data-name="01 Images / Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 37">
        <g clipPath="url(#clip0_1_910)" id="01 Images / Avatar">
          <path d={svgPaths.p1bb8f800} fill="var(--fill-0, #EFEFF0)" id="Ellipse 20" stroke="var(--stroke-0, #AFB1B6)" strokeWidth="2" />
          <path d={svgPaths.p29aefd00} id="Ellipse 21" stroke="var(--stroke-0, #AFB1B6)" strokeWidth="2" />
          <path d={svgPaths.p2cae2980} fill="var(--fill-0, #AFB1B6)" id="Intersect" />
        </g>
        <defs>
          <clipPath id="clip0_1_910">
            <rect fill="white" height="37" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[24px] py-[30px] top-0 w-[414px]">
      <div className="relative shrink-0 size-[32px]" data-name="burger-bar 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBurgerBar1} />
      </div>
      <Component01ImagesAvatar />
    </div>
  );
}

function FadersHorizontal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FadersHorizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FadersHorizontal">
          <path d={svgPaths.pa9a80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[321px] top-[172px] w-[63px]">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.14px] underline whitespace-pre">Filtrer</p>
      <FadersHorizontal />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.49)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center leading-[1.6] not-italic p-[10px] relative text-[22px] text-black tracking-[-0.22px] w-full">
          <p className="relative shrink-0 text-nowrap whitespace-pre">00:00</p>
          <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Amphi X</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[18px] w-[min-content]">Présentation de recherche doctorat</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[16px] tracking-[-0.16px] w-[min-content]">Présenté par X</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[27px] leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.16px] w-[319px]">Thème de la présentation</p>
    </div>
  );
}

function IconPlaceholder() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-placeholder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-placeholder">
          <g id="Shape">
            <path d={svgPaths.p2d83cd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19236f40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13a5d580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p414e400} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function WfTag() {
  return (
    <div className="bg-[#2d3648] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="WF Tag">
      <IconPlaceholder />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.14px] whitespace-pre">Tag</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <WfTag key={i} />
      ))}
    </div>
  );
}

function IconLeft() {
  return (
    <div className="absolute left-[-8px] size-[24px] top-0" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.p3ee81400} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconLeftWrapper() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Icon Left Wrapper">
      <IconLeft />
    </div>
  );
}

function WfButton() {
  return (
    <div className="bg-[#2d3648] box-border content-stretch flex gap-[8px] h-[44px] items-center overflow-clip px-[22px] py-[16px] relative rounded-[6px] shrink-0 w-[270px]" data-name="WF Button">
      <IconLeftWrapper />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.18px] whitespace-pre">Ajouter à mon calendrier</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[193px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[193px] items-start justify-between pb-[12px] pl-[43px] pr-0 pt-[8px] relative w-full">
          <Frame3 />
          <Frame6 />
          <WfButton />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#efeff0] content-stretch flex flex-col h-[248px] items-center relative rounded-[8px] shrink-0 w-full">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Frame5 key={i} />
      ))}
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.49)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center leading-[1.6] not-italic p-[10px] relative text-[22px] text-black tracking-[-0.22px] w-full">
          <p className="relative shrink-0 text-nowrap whitespace-pre">00:00</p>
          <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Amphi X</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[18px] w-[min-content]">Présentation de recherche doctorat</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[16px] tracking-[-0.16px] w-[min-content]">Présenté par X</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[27px] leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.16px] w-[319px]">Thème de la présentation</p>
    </div>
  );
}

function IconPlaceholder1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-placeholder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-placeholder">
          <g id="Shape">
            <path d={svgPaths.p2d83cd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19236f40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13a5d580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p414e400} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function WfTag1() {
  return (
    <div className="bg-[#2d3648] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="WF Tag">
      <IconPlaceholder1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.14px] whitespace-pre">Tag</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <WfTag1 key={i} />
      ))}
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="absolute left-[-8px] size-[24px] top-0" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Left">
          <path clipRule="evenodd" d={svgPaths.p3ee81400} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconLeftWrapper1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Icon Left Wrapper">
      <IconLeft1 />
    </div>
  );
}

function WfButton1() {
  return (
    <div className="bg-[#2d3648] box-border content-stretch flex gap-[8px] h-[44px] items-center overflow-clip px-[22px] py-[16px] relative rounded-[6px] shrink-0 w-[270px]" data-name="WF Button">
      <IconLeftWrapper1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.18px] whitespace-pre">Ajouter à mon calendrier</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[193px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[193px] items-start justify-between pb-[12px] pl-[43px] pr-0 pt-[8px] relative w-full">
          <Frame11 />
          <Frame12 />
          <WfButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#efeff0] content-stretch flex flex-col h-[248px] items-center relative rounded-[8px] shrink-0 w-full">
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Frame14 key={i} />
      ))}
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[380px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[24px] text-black w-full">{`Date `}</p>
      <Frame15 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[17px] top-[211px] w-[380px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">{`Date `}</p>
      <Frame7 />
      <Frame8 />
    </div>
  );
}

export default function Travel() {
  return (
    <div className="bg-white overflow-clip relative rounded-[40px] size-full" data-name="Travel 5">
      <Frame />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.3] left-1/2 text-[#19191b] text-[32px] text-center top-[70px] translate-x-[-50%] w-[350px]">Programme des doctorales 2026</p>
      <Frame1 />
      <Frame9 />
    </div>
  );
}