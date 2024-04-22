import React, { useRef } from "react";
import $ from "jquery";
import "./App.css";

const Output = () => {
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const handleConversion = () => {
    const formData = new FormData();
    const imageFile = $("#imageFile")[0].files[0];
    formData.append("image", imageFile);

    $.ajax({
      method: "POST",
      url: "https://api.api-ninjas.com/v1/imagetotext",
      data: formData,
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      headers: {
        "X-Api-Key": "FNdkA1iA6CGu62ivMPHaIA==cyNMrrE1FaBjdRdx",
      },
      success: (result: any) => {
        const textOutput = result.reduce(
          (acc: string, item: { text: string }) => acc + item.text + " ",
          ""
        );
        if (outputRef.current) {
          outputRef.current.value = textOutput;
        }
      },
      error: (jqXHR: any, textStatus: any, errorThrown: any) => {
        alert(jqXHR.responseText);
      },
    });
  };

  return (
    <div className="bg-gray-950 flex flex-col justify-center items-center text-white">
      <div className="flex">
        {/* <img
          src="https://i.imgur.com/oboGhuE.png"
          className="w-30 h-20  bg-gray-800 pt-4"
          alt="Heya"
        /> */}
        <h1 className="text-center text-3xl p-8">Pixel Pen</h1>
      </div>

      <div className="flex justify-between w-[20vw] border-black p-8">
        <input
          type="file"
          id="imageFile"
          accept="image/*"
          className="w-48 appearance-none"
        />

        <button
          id="convertBtn"
          className="border text-lg px-4 py-2 border-gray-800 rounded-lg bg-white text-gray-900"
          onClick={handleConversion}
        >
          Convert
        </button>
      </div>
      <div className="justify-center flex">
        <textarea
          ref={outputRef}
          rows={10}
          cols={50}
          className="output border text-gray-900 border-black "
          defaultValue="Extracted text here"
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return <Output />;
};

export default App;
