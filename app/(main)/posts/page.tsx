import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
};
export default PostPage;
