export const loadingComponent2 =()=>(
    <div>
        <div className="loading-container ">
            <div className="preloader-wrapper massive active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle" />
                    </div>
                    <div className="gap-patch">
                        <div className="circle" />
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export const FileImporter =(props)=>{

    function handleDrop(e) {
        let dt = e.dataTransfer
        let files = dt.files
        //Array.from(e.target.files)
        props.onChange(e,files[0],props.index)


    }
    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }
    let dropArea = document.getElementById('drop-area')||document.getElementById('drop-area-dos')
    let enterOverEvents=['dragenter', 'dragover'];
    let leaveDropEvents =['dragleave', 'drop'];
    if(dropArea) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)
        });
        dropArea.addEventListener('drop', handleDrop, false)

        enterOverEvents.forEach(eventName => {
            dropArea.addEventListener(eventName, ()=>{dropArea.classList.add('highlightedInput')}, false)
        })

        leaveDropEvents.forEach(eventName => {
            dropArea.addEventListener(eventName, ()=>{dropArea.classList.remove('highlightedInput')}, false)
        })
    }
    const loadingComponentUpload=<div style={{position:'relative'}}><div style={{position:'absolute',right:105,top:-255}}>{loadingComponent2}</div></div>;

    return (<div
        className="upload-modal-container"
        style={{visibility:props.display?'visible':'hidden',display:'flex',justifyContent:'center'}}

    >
        <div className="upload-card" style={{color:'white'}}>
            <input style={{visibility:'hidden'}} id={props.isSmall?'file-upload-logo':`file-upload-${props.index}${props.routeItemsIndex?props.routeItemsIndex:''}`} type="file" onChange={(e)=>{
                console.log('TEST:',props.routeItemsIndex);
                props.onChange(e,null,props.index,props.routeItemsIndex)}} />
            <div style={{width:'100%'}}>
                {/*        <span style={{display:'flex',justifyContent:'start',color:'#0d206c',fontWeight:900,margin:20,fontSize:20,paddingBottom:17}}>{`Upload ${rootStore.businessStore.practiceId?rootStore.businessStore.practiceId.name:'Practice'}'s logo`}</span>*/}
                <span style={{fontSize:18,display:'flex',justifyContent:'center',color:'#8e8e8e',fontWeight:100}}>{``}</span>

            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>

                <div style={{height:props.isSmall?100:100,width:props.isSmall?100:100,marginTop:25,display:'flex',justifyContent:'center'}}>
                    {(props.uploadStatus==='loading')?loadingComponentUpload:(props.imageURL)?<div>
                        <label id='drop-area-dos' htmlFor={props.isSmall?'file-upload-logo':`file-upload-${props.index}${props.routeItemsIndex?props.routeItemsIndex:''}`} className="uploadedImageContainer done fadedshort" style={{height:props.isSmall?103:103,width:props.isSmall?103:103}}>
                            <img className="uploadedImageContainer empty" height={props.isSmall?100:100} width={props.isSmall?100:100} src={props.imageURL}/>
                        </label>
                    </div>:<label id="drop-area" htmlFor={props.isSmall?'file-upload-logo':`file-upload-${props.index}${props.routeItemsIndex?props.routeItemsIndex:''}`} className="uploadedImageContainer fadedshort" style={{height:props.isSmall?100:100,width:props.isSmall?100:100,position:'relative',}}><span style={{fontSize:props.isSmall?20:20,top:props.isSmall?30:30,left:props.isSmall?23:23,position:'absolute'}}>Add +</span></label>}
                </div>


            </div>
            <div style={{display:'flex',justifyContent:'center',position:'relative',marginTop:10,
                fontSize: 12,
                color: '#5B5C61',
                fontWeight: 400
            }}>
            </div>

        </div>
    </div>);
};