import { Hero } from "@components/common"
import { CourseList } from "@components/course"
import { BaseLayout } from "@components/layout"
import { getAllCourses } from "@content/courses/fetcher"


export default function Home({courses}) {
  return (
    <>
      <Hero />
      <CourseList 
        courses={courses}
      />
    </>
  )
}

// If you export a function called getStaticProps (Static Site Generation) from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps.
export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout
