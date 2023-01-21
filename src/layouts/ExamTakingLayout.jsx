import HeaderTakeExam from './components/HeaderTakeExam';

function ExamTakingLayout({ children }) {
  return (
    <div className="bg-bg_light_gray min-h-screen">
      <HeaderTakeExam />
      {children}
    </div>
  );
}

export default ExamTakingLayout;
