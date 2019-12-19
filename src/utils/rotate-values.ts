export default function rotateValues(values: object, columns: number, rows: number): Array<any>{
  const pre =  Object.values(values)
  const after = []
   for(let c = 0; c < columns; c++) {
     for(let r = 0; r < rows; r++) {
       if (after[r]) {
         after[r].push(pre[c][r])
       } else{
         after[r] = []
         after[r].push(pre[c][r])
       }
     }
   }
   return after
 }

 export async function fetchFromUrl(url: string){
  const res = await fetch(url)
  const data = await res.json()
  return data
 }
