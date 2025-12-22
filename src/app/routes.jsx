import React from "react";
import { Navigate } from "react-router-dom";

import MapPage from "../pages/Map.jsx";
import ReviewPage from "../pages/Review.jsx";
import LeaderboardPage from "../pages/Leaderboard.jsx";
import ProfilePage from "../pages/Profile.jsx";

import LessonPage from "../pages/Lesson.jsx";
import QuizPage from "../pages/Quiz.jsx";

import ReviewQuizPage from "../pages/ReviewQuiz.jsx";
import BonusReviewQuiz from "../pages/BonusReviewQuiz.jsx";

import ResultSuccess from "../pages/ResultSuccess.jsx";
import ResultFail from "../pages/ResultFail.jsx";

export const routes = [
  { path: "/", element: <Navigate to="/map" replace /> },

  // Tabs principales
  { path: "/map", element: <MapPage /> },
  { path: "/review", element: <ReviewPage /> },
  { path: "/leaderboard", element: <LeaderboardPage /> },
  { path: "/profile", element: <ProfilePage /> },

  // Flow pédagogique
  { path: "/lesson/:lessonId", element: <LessonPage /> },
  { path: "/quiz/:lessonId", element: <QuizPage /> },

  // Résultats (UNIQUE source)
  { path: "/result/success/:lessonId", element: <ResultSuccess /> },
  { path: "/result/fail/:lessonId", element: <ResultFail /> },

  // Révisions
  { path: "/review/quiz/:reviewId", element: <ReviewQuizPage /> },
  { path: "/bonus/:bonusId", element: <BonusReviewQuiz /> },

  // Fallback
  { path: "*", element: <Navigate to="/map" replace /> },
];
