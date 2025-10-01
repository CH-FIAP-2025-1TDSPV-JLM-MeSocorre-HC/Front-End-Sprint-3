import { RefreshCcw } from "lucide-react";

export function Loading() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg">
          <p className="animate-pulse text-gray-500">Carregando... </p>
          <RefreshCcw className="animate-pulse text-gray-400 mt-4"/>
        </div> 
    </div>
     
  );
}
