import React, { useEffect, useState } from 'react'
import BasicDetail from './BasicDetail'
import AddProject from './AddProject'
import { db } from '@/utils'
import { project } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { asc, desc, eq } from 'drizzle-orm'
import ProjectListEdit from './ProjectListEdit'

function FormContent() {

  const {user}=useUser();
  const [projectList,setProjectList]=useState([]);

  useEffect(()=>{
    user&&GetProjectList();
  },[user])

  const GetProjectList=async()=>{
    const result=await db.select().from(project)
    .where(eq(project.emailRef,user?.primaryEmailAddress.emailAddress))
    .orderBy(asc(project.order))

    setProjectList(result);

  }

   

  return (
    <div className='px-6 overflow-auto'>
      <h1 className='text-5xl font-bold pb-7 text-white'>Portfolio Builder</h1>
      <h2 className='text-3xl font-bold'>Start Desiging your portfolio page</h2>
      <BasicDetail/>
      <hr className='my-5'></hr>
      <AddProject refreshData={GetProjectList}/>

      <ProjectListEdit projectList={projectList} refreshData={GetProjectList} />
    </div>
  )
}

export default FormContent