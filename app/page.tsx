"use client"
import Accueil from "@/components/views/Accueil/Accueil";
import LoadinScreen from "@/components/views/Loading/LoadinScreen";
import { useState } from "react";

export default function Home() {
  const [loadingAnimationFinished, setLoadingAnimationFinished] = useState(false);

  return (
    <main>
      {
        !loadingAnimationFinished ? <LoadinScreen loadingAnimationFinished={loadingAnimationFinished} setLoadingAnimationFinished={setLoadingAnimationFinished}/> : <Accueil/> 
      }
    </main>
  );
}