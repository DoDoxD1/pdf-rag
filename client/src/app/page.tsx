import { FileUplaodComponent } from "./components/file-upload";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex">
        <div className="w-[30vw] p-4 flex justify-center items-center">
          <FileUplaodComponent />
        </div>
        <div className="w-[70vw]p-4">2</div>
      </div>
    </div>
  );
}
