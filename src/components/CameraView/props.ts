
export interface CameraViewProps{
  cameraRef:React.MutableRefObject<any>
  isRecording:boolean
  onRecord:()=>void;
  onStopRecording: ()=>void;
}