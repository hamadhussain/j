import Link from 'next/link';

function JobCraft() {
  return (
    <div>

      <header>
        <h1>JobCraft</h1>
        <p>We’re here to help you land your next job</p>
      </header>

      <section>
        <h2>Millions of people are learning on JobCraft</h2>
        <ul>
          <li>
            <Link href="/improve-resume">
              <a>I want to improve my resume</a>
            </Link>
          </li>
          <li>
            <Link href="/improve-profile">
              <a>I want to improve my JobCraft Profile page</a>
            </Link>
          </li>
          <li>
            <Link href="/get-referral">
              <a>I want to get a referral</a>
            </Link>
          </li>
          <li>
            <Link href="/network-to-find-job">
              <a>I want to use JobCraft to network to find a job</a>
            </Link>
          </li>
          <li>
            <Link href="/checklist-best-practices">
              <a>Checklist of best practices for getting a job</a>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>I want to improve my resume</h2>
        <p>Learn from our resume industry expert, whose videos have been watched by over 400,000 job seekers and helped them land a job</p>
        <video src="/resume-makeover-video" width="100%" height="400" controls />
        <ul>
          <li>Key takeaway: Your resume is a compelling marketing document, not an autobiography.</li>
          <li>Key takeaway: Make your resume unique by using your own voice, so you can stand out in the sea of resumes.</li>
          <li>Key takeaway: Make the words earn their spot - say what you need to without being too brief or too wordy.</li>
        </ul>
        <p>Related courses:</p>
        <ul>
          <li>
            <Link href="/optimize-resume-for-ats">
              <a>Optimize your resume for applicant tracking systems</a>
            </Link>
          </li>
          <li>
            <Link href="/anatomy-of-killer-cover-letter">
              <a>The anatomy of a killer cover letter</a>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Get JobCraft with Premium</h2>
        <p>Candidates with Premium get hired twice as fast on average.</p>
        <ul>
          <li>Reach out directly to any recruiters with 3 InMail credits.</li>
          <li>Get access to over 17,000 courses taught by industry experts.</li>
        </ul>
        <button>Start my free month</button>
      </section>
    </div>
  );
}

export default JobCraft;