import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Newspaper } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={82}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={1400}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Posts"
          count={82}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
      </div>

      <PostsTable limit={5} />
    </>
  );
}
