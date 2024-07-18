import { VideoIcon } from "lucide-react";

function App() {
  return (
    <div className="w-full px-6 py-4 h-full flex flex-col items-center justify-center">
      <div className="mx-auto w-fit">
        <div className="flex items-center">
          <VideoIcon className="w-10 h-10 mr-2" />
          <p className="font-header text-3xl">Clip Trimmer</p>
        </div>
        <p className="text-muted-foreground">
          Trim, compress and export your clips without hassle
        </p>
      </div>
    </div>
  );
}

export default App;
