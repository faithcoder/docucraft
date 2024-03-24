import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Image
        src="/images/logo.png"
        alt="Docucraft Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
