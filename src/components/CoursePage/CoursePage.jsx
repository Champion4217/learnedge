import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../layout/Loader/Loader';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }

  return (
   loading ? <Loader /> : (
   <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
   {
    lectures && lectures.length > 0 ? 
    (
    <>
    <Box>
     <video
       width={'100%'}
       controls
       controlsList="nodownload noremoteplayback"
       src={lectures[lectureNumber].video.url}
       disablePictureInPicture
       disableRemotePlayback
     ></video>

     <Heading
       children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
       m={'4'}
     />

     <Heading children="Description" m={'4'} />

     <Text m={'4'} children={lectures[lectureNumber].description} />
   </Box>

   <VStack>
     {lectures.map((item, index) => (
       <button
         onClick={() => setLectureNumber(index)}
         key={item._id}
         style={{
           width: '100%',
           padding: '1rem',
           textAlign: 'center',
           margin: '0',
           borderBottom: '1px solid rgba(0,0,0,0.2)',
         }}
       >
         <Text noOfLines={1}>
           #{index + 1} {item.title}
         </Text>
       </button>
     ))}
   </VStack>
    </>
    ) : 
   <Heading children="No Lectures" />
    };
 </Grid>
  )
)
};

export default CoursePage;
