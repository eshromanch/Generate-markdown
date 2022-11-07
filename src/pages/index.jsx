// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
// import Image from "next/image";
// import reactLogo from "../assets/react.svg";
// import tauriLogo from "../assets/tauri.svg";
// import nextLogo from "../assets/next.svg";

// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }

//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <span className="logos">
//           <a href="https://nextjs.org" target="_blank">
//             <Image
//               width={144}
//               height={144}
//               src={nextLogo}
//               className="logo next"
//               alt="Next logo"
//             />
//           </a>
//         </span>
//         <span className="logos">
//           <a href="https://tauri.app" target="_blank">
//             <Image
//               width={144}
//               height={144}
//               src={tauriLogo}
//               className="logo tauri"
//               alt="Tauri logo"
//             />
//           </a>
//         </span>
//         <span className="logos">
//           <a href="https://reactjs.org" target="_blank">
//             <Image
//               width={144}
//               height={144}
//               src={reactLogo}
//               className="logo react"
//               alt="React logo"
//             />
//           </a>
//         </span>
//       </div>

//       <p>Click on the Tauri, Next, and React logos to learn more.</p>

//       <div className="row">
//         <div>
//           <input
//             id="greet-input"
//             onChange={(e) => setName(e.currentTarget.value)}
//             placeholder="Enter a name..."
//           />
//           <button type="button" onClick={() => greet()}>
//             Greet
//           </button>
//         </div>
//       </div>

//       <p>{greetMsg}</p>
//     </div>
//   );
// }

// export default App;

import dynamic from 'next/dynamic';
import { convert } from 'html-to-text';
import Router, { useRouter } from 'next/router'
// import { writeFileSync } from 'fs-extra'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
// const fs = dynamic(import('fs'), {
//   ssr: true,
//   loading: () => <p>Loading ...</p>,
// });

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];
let data ;

export default function Editor() {


  return (

<div className=''>
<QuillNoSSRWrapper className=''
      modules={modules}
      formats={formats}
      theme="snow"
      
      onChange={(content) => {
        // var htmlToRtf = require('html-to-rtf');
        // console.log('CONTETN: ', content);
        data = content
      }}
    />
    <button onClick={
(content) => {
  const text = convert(`${data}`);

  Router.push({
    pathname: '/print',
    query: { data },
  }
  )

}

    }>Generate</button>
</div>
  );
}