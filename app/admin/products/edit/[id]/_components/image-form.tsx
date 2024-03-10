'use client'

import Image from "next/image";
import { UploadButton } from "../_utils/uploadthing";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/app/_components/ui/dialog";

interface ImageFormProps {
  imageUrl: string;
  description: string;
  updateImage: (imageUrl: string) => void;
}

const ImageForm = ({ imageUrl, description, updateImage }: ImageFormProps) => {

  return (
    <div className="w-full flex flex-col">
      <h3 className="text-sm font-medium">Imagem:</h3>
      <div className="flex gap-2 items-center mt-2">
        <Image
          src={imageUrl}
          alt={description}
          height={130}
          width={130}
          className="rounded-xl"
        />
        <UploadButton
          endpoint="imageUploader"
          appearance={{
            button({ ready, isUploading }) {
              return {
                fontSize: "1rem",
                width: 'fit',
                fontWeight: "bold",
                border: "none",
                cursor: ready? "pointer" : "not-allowed",
                color: "black",
                backgroundColor: '#ffbf00',
                ...(ready && { color: "#ecfdf5" }),
                ...(isUploading && { color: "#d1d5db", backgroundColor: '#ffbf00'}),
              };
            },
            container: {
              marginTop: "1rem",
            },
            allowedContent: {
              color: "#a1a1aa",
            },
          }}
          content={{
            button({ ready }) {
              if (ready) return <div>Nova imagem</div>;
         
              return "Carregando...";
            },
            allowedContent({ ready, fileTypes, isUploading }) {
              if (!ready) return "Carregando...";
              if (isUploading) return "Enviando...";
              return `Você pode enviar: ${fileTypes.join(", ")}`;
            },
          }}
          onClientUploadComplete={(res) => {
            updateImage(res[0].url)
            console.log('Files: ', res);
            alert('Upload completo');
          }}
          onUploadError={(error: Error) => {
            console.log('Error: ', error);
            alert(`Upload error! ${error.message}`)
          }}
        />
        <p className="text-gray-400 text-sm w-[full] flex flex-col">
          <span>* Não inserir imagens muito grandes.</span>
          <span>* Não fique adicionando imagens aleatoriamente, irá ocupar espaço no armazenamento.</span>
        </p>
      </div>
    </div>
  );
}

export default ImageForm;