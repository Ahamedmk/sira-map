import React from "react";
import { Navigate } from "react-router-dom";

import MapPage from "../pages/Map.jsx";
import ReviewPage from "../pages/Review.jsx";
import LeaderboardPage from "../pages/Leaderboard.jsx";
import ProfilePage from "../pages/Profile.jsx";
import LessonPage from "../pages/Lesson.jsx";
import QuizPage from "../pages/Quiz.jsx";
import SuccessPage from "../pages/Success.jsx";
import FailPage from "../pages/Fail.jsx";
import ReviewQuizPage from "../pages/ReviewQuiz.jsx";
import BonusReviewQuiz from "../pages/BonusReviewQuiz.jsx";





export const routes = [
  { path: "/", element: <Navigate to="/map" replace /> },

  { path: "/map", element: <MapPage /> },
  { path: "/review", element: <ReviewPage /> },
  { path: "/leaderboard", element: <LeaderboardPage /> },
  { path: "/profile", element: <ProfilePage /> },

  // écrans “flow”
  { path: "/lesson/:lessonId", element: <LessonPage /> },
  { path: "/quiz/:lessonId", element: <QuizPage /> },
    { path: "/result/success/:lessonId", element: <SuccessPage /> },
  { path: "/result/fail/:lessonId", element: <FailPage /> },
  { path: "/review/quiz/:reviewId", element: <ReviewQuizPage /> },
  { path: "/bonus/:bonusId", element: <BonusReviewQuiz /> },




  { path: "*", element: <Navigate to="/map" replace /> },
];
