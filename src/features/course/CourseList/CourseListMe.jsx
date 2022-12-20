import React from 'react';
import Container from '../../../layouts/components/Container';
import { UserCourses } from '../../user';

const CourseListMe = () => {
  return (
    <Container className="mt-4">
      <UserCourses />
    </Container>
  );
};

export default CourseListMe;
