import svgPaths from "./svg-6a8avdmo14";

function Group() {
  return (
    <div className="absolute contents inset-[38.82%_5.49%_14.22%_21.78%]" data-name="Group">
      <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-[38.82%_5.49%_14.22%_21.78%] leading-[normal] text-[#354878] text-[107.14px] text-nowrap whitespace-pre">Doctorales</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.48%_56.37%_48.56%_21.78%]" data-name="Group">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[4.48%_56.37%_48.56%_21.78%] leading-[normal] text-[#354878] text-[107.139px] text-nowrap whitespace-pre">Les</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[29.53%_82%_51.78%_11.88%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
        <g id="Group">
          <path d={svgPaths.pa74afa0} fill="var(--fill-0, #6A9ECC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[62.07%_80.25%_23.25%_14.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
        <g id="Group">
          <path d={svgPaths.p2d3bd200} fill="var(--fill-0, #B9177B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[57.37%_88.89%_30.59%_7.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Group">
          <path d={svgPaths.p9d4a900} fill="var(--fill-0, #AD947E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PlanDeTravail() {
  return (
    <div className="absolute contents inset-0" data-name="Plan-de-travail1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector"></g>
      </svg>
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

export default function LogoLesDoctoralesV() {
  return (
    <div className="relative size-full" data-name="Logo les doctorales V2 1">
      <PlanDeTravail />
    </div>
  );
}