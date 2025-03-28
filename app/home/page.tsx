'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import SideBar from './components/SideBar/SideBar';
import TextInputBox from './components/TextInputBox/TextInputBox';
import FileInputBox from './components/FileInputBox/FileInputBox';
import LogoSwitch from '../components/LogoSwitch/LogoSwitch';
import Link from 'next/link';

const HomePage = () => {
  const [courses, setCourses] = useState<string[]>([]);

  const addCourse = (course: string) => {
    if (course.trim() !== '') {
      setCourses((prevCourses) => [...prevCourses, course.trim()]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar/>
      </div>
      <div className={styles.inputSection}>
        <div className={styles.fileInputBox}>
          <FileInputBox />
        </div>
        <div className={styles.textInputBox}>
          <TextInputBox addCourse={addCourse} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/result">
          <button className={styles.button}>Continue</button>
        </Link>
        <LogoSwitch />
      </div>
    </div>
  );
};

export default HomePage;
