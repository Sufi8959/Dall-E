import { surpriseMePrompts } from "./../constant/index";
import FileSaver from "file-saver";
export function GetRandomPrompts(prompts) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompts) return GetRandomPrompts(prompts);
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
