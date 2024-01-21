"use strict";(self.webpackChunkcarousel_challenge=self.webpackChunkcarousel_challenge||[]).push([[262],{"./src/app/components/UploadSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UploadSlider_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),lib=__webpack_require__("./node_modules/react-slick/lib/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),arrow_right=__webpack_require__("./public/icons/arrow_right.svg"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function NextArrow(props){var className=props.className,style=props.style,onClick=props.onClick;return __jsx(next_image.Z,{className,style:_objectSpread(_objectSpread({},style),{},{display:"block"}),onClick,src:arrow_right.Z,alt:"Arrow Right"})}NextArrow.displayName="NextArrow";try{NextArrow.displayName="NextArrow",NextArrow.__docgenInfo={description:"",displayName:"NextArrow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/NextArrow.tsx#NextArrow"]={docgenInfo:NextArrow.__docgenInfo,name:"NextArrow",path:"src/app/components/NextArrow.tsx#NextArrow"})}catch(__react_docgen_typescript_loader_error){}var arrow_left=__webpack_require__("./public/icons/arrow_left.svg"),PrevArrow_jsx=react.createElement;function PrevArrow_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function PrevArrow_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?PrevArrow_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PrevArrow_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function PrevArrow(props){var className=props.className,style=props.style,onClick=props.onClick;return PrevArrow_jsx(next_image.Z,{className,style:PrevArrow_objectSpread(PrevArrow_objectSpread({},style),{},{display:"block"}),onClick,src:arrow_left.Z,alt:"Arrow Left"})}PrevArrow.displayName="PrevArrow";try{PrevArrow.displayName="PrevArrow",PrevArrow.__docgenInfo={description:"",displayName:"PrevArrow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/PrevArrow.tsx#PrevArrow"]={docgenInfo:PrevArrow.__docgenInfo,name:"PrevArrow",path:"src/app/components/PrevArrow.tsx#PrevArrow"})}catch(__react_docgen_typescript_loader_error){}var es=__webpack_require__("./node_modules/react-dropzone/dist/es/index.js");const plus={src:"static/media/plus.14e5bcd4.svg",height:71,width:72,blurDataURL:"static/media/plus.14e5bcd4.svg"},icons_delete={src:"static/media/delete.d9cb1234.svg",height:35,width:35,blurDataURL:"static/media/delete.d9cb1234.svg"};var UploadDrag=__webpack_require__("./src/app/components/UploadDrag.tsx"),UploadSlider_jsx=react.createElement;function UploadSlider(_ref){var onDrop=_ref.onDrop,selectedImages=_ref.selectedImages,showDeleteButton=_ref.showDeleteButton,setShowDeleteButton=_ref.setShowDeleteButton,currentIndex=_ref.currentIndex,handleShowDeleteButton=_ref.handleShowDeleteButton,deleteImage=_ref.deleteImage,_useDropzone=(0,es.uI)({onDrop,accept:{"image/jpeg":[],"image/png":[]},multiple:!1}),isDragActive=_useDropzone.isDragActive,getRootProps=_useDropzone.getRootProps,getInputProps=_useDropzone.getInputProps,settings={dots:!0,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4,initialSlide:0,nextArrow:UploadSlider_jsx(NextArrow,null),prevArrow:UploadSlider_jsx(PrevArrow,null),variableWidth:!0,width:"250px",responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return UploadSlider_jsx("div",{className:"w-3/4 flex justify-center items-center gap-3"},UploadSlider_jsx("div",{className:"w-full h-56 rounded-xl border border-gray-400 bg-white relative"},isDragActive&&UploadSlider_jsx(UploadDrag.M,null),UploadSlider_jsx(lib.Z,(0,esm_extends.Z)({className:"w-full h-full p-3 min-w-[200px]"},settings),UploadSlider_jsx("div",(0,esm_extends.Z)({className:"min-w-[200px]"},getRootProps()),UploadSlider_jsx("div",{className:"w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg bg-neutral-300 cursor-pointer hover:brightness-105"},UploadSlider_jsx(next_image.Z,{src:plus,alt:"Plus"}),UploadSlider_jsx("p",{className:"text-xl text-center"},"Add new images"))),selectedImages.length>0&&selectedImages.map((function(image,index){return UploadSlider_jsx("div",(0,esm_extends.Z)({key:index,className:"relative"},getInputProps()),UploadSlider_jsx(next_image.Z,{src:image,onMouseOver:function onMouseOver(){return handleShowDeleteButton(index)},onMouseOut:function onMouseOut(){return setShowDeleteButton(!1)},width:200,height:200,className:"rounded-lg max-w-[200px] max-h-[200px] hover:brightness-50",alt:"Image ".concat(index)}),showDeleteButton&&currentIndex===index&&UploadSlider_jsx(next_image.Z,{src:icons_delete,onClick:function onClick(){return deleteImage(index)},onMouseOver:function onMouseOver(){return setShowDeleteButton(!0)},onMouseOut:function onMouseOut(){return setShowDeleteButton(!1)},className:"absolute z-10 top-0 right-10 cursor-pointer",alt:"Delete"}))})))))}UploadSlider.displayName="UploadSlider";try{UploadSlider.displayName="UploadSlider",UploadSlider.__docgenInfo={description:"",displayName:"UploadSlider",props:{onDrop:{defaultValue:null,description:"",name:"onDrop",required:!0,type:{name:"(acceptedFiles: any, rejectedFiles: any) => void"}},selectedImages:{defaultValue:null,description:"",name:"selectedImages",required:!0,type:{name:"string[]"}},showDeleteButton:{defaultValue:null,description:"",name:"showDeleteButton",required:!0,type:{name:"boolean"}},setShowDeleteButton:{defaultValue:null,description:"",name:"setShowDeleteButton",required:!0,type:{name:"(showDeleteButton: boolean) => void"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},handleShowDeleteButton:{defaultValue:null,description:"",name:"handleShowDeleteButton",required:!0,type:{name:"(index: number) => void"}},deleteImage:{defaultValue:null,description:"",name:"deleteImage",required:!0,type:{name:"(index: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/UploadSlider.tsx#UploadSlider"]={docgenInfo:UploadSlider.__docgenInfo,name:"UploadSlider",path:"src/app/components/UploadSlider.tsx#UploadSlider"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/slick-carousel/slick/slick.css"),__webpack_require__("./node_modules/slick-carousel/slick/slick-theme.css");var console=__webpack_require__("./node_modules/console-browserify/index.js"),UploadSlider_stories_jsx=react.createElement;const UploadSlider_stories={title:"UploadSlider",component:UploadSlider};var Template=function Template(args){return UploadSlider_stories_jsx(UploadSlider,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={onDrop:function onDrop(acceptedFiles,rejectedFiles){return console.log("Files dropped:",acceptedFiles)},selectedImages:["https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg","https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg"],showDeleteButton:!0,setShowDeleteButton:function setShowDeleteButton(){},currentIndex:0,handleShowDeleteButton:function handleShowDeleteButton(){},deleteImage:function deleteImage(){}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <UploadSlider {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./public/icons/arrow_left.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/arrow_left.e1b4a357.svg",height:44,width:33,blurDataURL:"static/media/arrow_left.e1b4a357.svg"}},"./public/icons/arrow_right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/arrow_right.86867213.svg",height:44,width:33,blurDataURL:"static/media/arrow_right.86867213.svg"}},"./src/app/components/UploadDrag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>UploadDrag});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const up_ico={src:"static/media/up_ico.e5d35601.svg",height:67,width:67,blurDataURL:"static/media/up_ico.e5d35601.svg"};var __jsx=react.createElement;function UploadDrag(){return __jsx("div",{className:"absolute z-50 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white gap-2"},__jsx(next_image.Z,{src:up_ico,alt:"Upload"}),__jsx("p",{className:"md:text-xl"},"Drag here to upload"),__jsx("p",{className:"md:text-xl"},"PNG or JPG (max. 800x400px)"))}UploadDrag.displayName="UploadDrag"}}]);