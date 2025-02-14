import ContentPin from "./ContentPin";
import ContentBaoHanh from "./ContentBaoHanh";
import ContentMore from "./ContentMore";
export default function IndexContent() {
  return (
    <div className="flex flex-col w-full h-auto gap-20 px-10">
      <ContentPin />
      <ContentBaoHanh />
      <ContentMore />
    </div>
  );
}
