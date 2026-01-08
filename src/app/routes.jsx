import React from "react";
import { Navigate } from "react-router-dom";

import PresentationPage from "../pages/Presentation.jsx";
import MapPage from "../pages/Map.jsx";
import ReviewPage from "../pages/Review.jsx";
import LeaderboardPage from "../pages/Leaderboard.jsx";
import ProfilePage from "../pages/Profile.jsx";
import LoginPage from "../pages/Login.jsx";
import SubscribePage from "../pages/Subscribe.jsx";
import EntryPage from "../pages/Entry.jsx";
import PaywallPage from "../pages/Paywall.jsx";

import LessonPage from "../pages/Lesson.jsx";
import CollectionPage from "../pages/CollectionPage.jsx";
import QuizPage from "../pages/Quiz.jsx";

import ReviewQuizPage from "../pages/ReviewQuiz.jsx";
import BonusReviewQuiz from "../pages/BonusReviewQuiz.jsx";

import ResultSuccess from "../pages/ResultSuccess.jsx";
import ResultFail from "../pages/ResultFail.jsx";
import Timeline from "../pages/Timeline";

import WeeklyBossPage from "../pages/WeeklyBossPage.jsx";
import WeeklyBossQuizPage from "../pages/WeeklyBossQuizPage.jsx";
import WeeklyBossResultPage from "../pages/WeeklyBossResultPage.jsx";

export const routes = [
  { path: "/", element: <EntryPage /> },

  // Tabs principales
   { path: "/presentation", element: <PresentationPage /> },
  { path: "/map", element: <MapPage /> },
  { path: "/review", element: <ReviewPage /> },
  { path: "/leaderboard", element: <LeaderboardPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path:"/timeline", element:<Timeline /> },
  { path:"/collection", element:<CollectionPage />},
  { path:"/login", element:<LoginPage />},
  { path: "/subscribe", element: <SubscribePage /> },
  { path: "/paywall", element: <PaywallPage /> },

  

  // Flow pédagogique
  { path: "/lesson/:lessonId", element: <LessonPage /> },
  { path: "/quiz/:lessonId", element: <QuizPage /> },
  

  // Résultats (UNIQUE source)
  { path: "/result/success/:lessonId", element: <ResultSuccess /> },
  { path: "/result/fail/:lessonId", element: <ResultFail /> },

  // Révisions
  { path: "/review/quiz/:reviewId", element: <ReviewQuizPage /> },
  { path: "/bonus/:bonusId", element: <BonusReviewQuiz /> },

  { path:"/weeklyboss", element:<WeeklyBossPage />},
{ path:"/weeklyboss/quiz", element:<WeeklyBossQuizPage />},
{ path:"/weeklyboss/result", element:<WeeklyBossResultPage />},

  // Fallback
  { path: "*", element: <Navigate to="/map" replace /> },
];
