const allQuestions = [
    {
      number: 1,
      text: 'How often do you have a drink containing alcohol?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: '2-3 times a week', points: 4 },
        { answerText: '4-6 times a week', points: 5 },
        { answerText: 'Daily', points: 6 },
      ],
    },
    {
      number: 2,
      text: 'How many drinks containing alcohol do you have on a typical day when you are drinking?',
      options: [
        { answerText: '1 drink', points: 0 },
        { answerText: '2 drinks', points: 1 },
        { answerText: '3 drinks', points: 2 },
        { answerText: '4 drinks', points: 3 },
        { answerText: '5-6 drinks', points: 4 },
        { answerText: '7-9 drinks', points: 5 },
        { answerText: '10 or more drinks', points: 6 },
      ],
    },
    {
      number: 3,
      text: 'How often do you have X (5 for men, 4 for women & men over age 65) or more drinks on one occasion?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: '2-3 times a week', points: 4 },
        { answerText: '4-6 times a week', points: 5 },
        { answerText: 'Daily', points: 6 },
      ],
    },
    {
      number: 4,
      text: 'How often during the last year have you found that you were not able to stop drinking once you had started?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: 'Daily or almost daily', points: 4 },
      ],
    },
    {
      number: 5,
      text: 'How often during the last year have you failed to do what was normally expected from you because of drinking?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: 'Daily or almost daily', points: 4 },
      ],
    },
    {
      number: 6,
      text: 'How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: 'Daily or almost daily', points: 4 },
      ],
    },
    {
      number: 7,
      text: 'How often during the last year have you had a feeling of guilt or remorse after drinking?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: 'Daily or almost daily', points: 4 },
      ],
    },
    {
      number: 8,
      text: 'How often during the last year have you been unable to remember what happened the night before because you had been drinking?',
      options: [
        { answerText: 'Never', points: 0 },
        { answerText: 'Less than monthly', points: 1 },
        { answerText: 'Monthly', points: 2 },
        { answerText: 'Weekly', points: 3 },
        { answerText: 'Daily or almost daily', points: 4 },
      ],
    },
    {
      number: 9,
      text: 'Have you or someone else been injured as a result of your drinking?',
      options: [
        { answerText: 'No', points: 0 },
        { answerText: 'Yes, but not in the last year', points: 2 },
        { answerText: 'Yes, during the last year', points: 4 },
      ],
    },
    {
      number: 10,
      text: 'Has a relative or friend, or a doctor or other health worker been concerned about your drinking or suggested you cut down?',
      options: [
        { answerText: 'No', points: 0 },
        { answerText: 'Yes, but not in the last year', points: 2 },
        { answerText: 'Yes, during the last year', points: 4 },
      ],
    },
  ]

  export default allQuestions