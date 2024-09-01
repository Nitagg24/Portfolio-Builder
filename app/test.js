import { db } from '@/utils'
import { storage } from '@/utils/firebaseConfig'
import { project } from '@/utils/schema'
import { TwicPicture } from '@twicpics/components/react'
import { and, eq } from 'drizzle-orm'
import { ref, uploadBytes } from 'firebase/storage'
import { GripVertical, Image, LayoutGrid, LineChart, Link2, SquareStack, Trash2 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useUser } from '@clerk/nextjs'
import { PreviewUpdateContext } from '@/app/_context/PreviewUpdateContext'

const OnProjectDelete = (projectId) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const result = await db.delete(project).where(eq(project.id, projectId))
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            refreshData();
            toast.error('Deleted!', {
                position: 'top-right'
            })
            setUpdatePreview(updatePreview+1)

        }
    });
}


console.log(OnProjectDelete(4))