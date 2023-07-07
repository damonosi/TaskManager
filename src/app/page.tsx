import GreetingsMessage from "@/components/Home/GreetingsMessage";

export default async function Home() {
  function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
      if (num > max_num) {
        max_num = num;
      }
    }
    return max_num;
  }
  const maxNum = find_max([1, 7, 8, 22, 77, 25, 98]);
  console.log(maxNum);
  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <div className="flex gap-4">
        <GreetingsMessage />
      </div>
    </div>
  );
}
