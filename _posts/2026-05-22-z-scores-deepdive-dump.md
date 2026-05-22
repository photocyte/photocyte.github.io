# Z-Scores as Grades: Evidence, Prior Art, and the Corporate Parallel

## TL;DR
- **Literal z-score grading exists, but only in two places: (1) Sri Lanka's national university-admission system, where the A-level Z-score has been the primary selection criterion since 2001, and (2) a small number of individual STEM instructors (e.g., Otto Mueller at Alfred U.; Justin Larsen and Madsen at UC Davis; Gary Pielak at UNC). No North American university uses pure z-scores as transcript grades; Quebec's Cote R is the closest institutional analog, but it deliberately modifies the raw z-score to fix the very problems Sri Kosuri's tweet glosses over.**
- **The most serious analytic prior art is not z-scores per se but a family of latent-trait / paired-comparison models — Valen Johnson's Bayesian Achievement Index (1997, 2003), Vanderbei et al.'s regression-based "fair grading" (2014), Caulkins-Larkey-Wei (1996), and Wittman (2022). These dominate pure z-scores statistically because they handle non-normal grade distributions, student selection into easy classes, and small-cohort instability. The Bradley-Terry-Luce route (mathematically equivalent to Elo) is well developed for item-level grading (Chen-Hartline-Zoeter 2023; Pelánek 2016) but, surprisingly, no one has yet published an "Elo for transcripts" proposal — a real gap Tim could fill.**
- **The comparison to corporate forced ranking should be a brake, not an accelerator. GE announced the end of its annual stack-ranking process in August 2015 (CNBC, "General Electric Rethinks Its Annual Job Reviews," 19 Aug 2015), with full transition to PD@GE across its ~300,000-person workforce by end of 2016; Microsoft killed it on November 12, 2013, per Lisa Brummel's company-wide email ("No more curve … there will no longer be a pre-determined targeted distribution"); Accenture (Sept. 2015), Adobe (2012), and Deloitte (2014) followed. The cleanest causal field evidence — Barankay's three-year RCT on furniture salespeople — found that *removing* rank feedback raised performance by 11%. Universities pushing toward Harvard's 20%-A cap or pure z-scores are reaching for a tool that the corporate world has been quietly putting down, for reasons — collaboration collapse, gaming, distributional unfairness in strong cohorts — that apply at least as forcefully to classrooms.**

## Key Findings

1. **There is no robust academic case for using raw z-scores as final grades.** The argument that survives is the *weaker* claim that some normalization across instructors is needed; the *stronger* claim that z-scores themselves should be the grades has essentially zero peer-reviewed advocacy. Even in Sri Lanka, the system is constantly contested and required Supreme Court intervention in 2012 over a calculation error.

2. **The Cote R is not a pure z-score.** It is a z-score *adjusted* by two cohort-strength indicators (ISGZ and IDGZ) derived from students' Quebec secondary-school marks, plus constants (×5, +25) chosen to land most scores in the 15–35 range. The adjustment exists precisely because pure z-scores penalize strong cohorts — the single biggest objection to Kosuri's proposal. Quebec has been refining it since 1995 and is still in dispute (Fédération étudiante collégiale du Québec called for an independent investigation in 2022).

3. **Forced-curve / norm-referenced grading was the implicit default in U.S. higher education until roughly the Vietnam era**, then declined sharply after Glaser's 1963 introduction of criterion-referenced measurement, the spread of mastery learning (Bloom 1968, 1971), and Civil Rights / Vietnam draft-deferment politics. The current grade-inflation problem is in part a consequence of that movement having no replacement signal.

4. **Recent institutional experiments at scale have mostly failed.** Princeton's 35%-A cap (2004–2014) was abandoned in a faculty vote; Wellesley's B+ class-average cap (2004–present) is the rare survival but had measurable adverse effects (Butcher, McEwan & Weerapana 2014). Harvard's May 20, 2026 vote — 20% A-cap plus four — was passed 458–201 *over* 85% student opposition (HUA February 2026 survey) and uses class percentile rank for internal honors, which is the closest any elite U.S. institution has come to formal relative ranking.

5. **Corporate America's trajectory runs the opposite direction.** Stack ranking peaked around 2000–2010 and has been progressively dismantled at Microsoft (Nov. 2013), Adobe (2012), Deloitte (2014), GE (Aug. 2015), and Accenture (Sept. 2015). The academic evidence base, particularly Barankay's field experiments, suggests rank feedback can *reduce* performance in commission-based settings, though educational settings show the opposite sign (Azmat & Iriberri 2010; Bandiera-Barankay-Rasul 2012).

6. **Adjacent reform movements — ungrading (Blum 2020), mastery/standards-based grading, and percentile-on-transcript reporting (Dartmouth since 1994; Cornell 2008–2023, since rescinded) — collectively show no consensus.** Cornell's experiment with putting median grades on transcripts was found by Bar, Kadiyali & Zussman (2009) to *accelerate* grade inflation via course-shopping, and the Faculty Senate abolished it in December 2023.

## Details

### 1. Literal Z-Score Grading: The Narrow Question

**Sri Lanka (national, since 2001) is the only large-scale, multi-decade, governmental implementation.** Following a 2001 reform led by Prof. R.O. Thattil (Peradeniya), the General Certificate of Education (Advanced Level) examination's three subject marks are converted to z-scores (mean-zero, SD-one within each subject-stream-and-syllabus cohort), then averaged. University admission is based on the resulting Z plus a district-quota system (40% all-island merit, 55% district quota, 5% "educationally underprivileged" districts). The University Grants Commission publishes minimum cutoff Z's by district and course every year. This is the literal version of what Kosuri proposes — but only as an *admissions* sorting tool, not a transcript grade.

The Sri Lankan case carries an important warning. When the 2011 A/L exam pooled candidates from old and new syllabi into a single normalization, students sued; the Supreme Court ordered the UGC to recompute Z-scores separately for the two cohorts (*Sunday Times*, July 2012). 5,609 additional students had to be admitted after recalculation. This illustrates the *cohort definition problem*: z-scores presume a meaningful reference population, and that judgment is contestable and politically loaded.

**Individual instructors using literal z-score-to-letter mapping.** Documented cases are rare and concentrated in physical sciences:
- **Otto Mueller, Alfred University (Physics):** "With the exceptions of Labs, I calculate the Z-scores for everything I grade, and it is the Z-score which is used in calculations determining letter grades. As a first approximation, I consider a change of 1 in Z-score to produce a change of one letter grade." (ottohmuller.com)
- **Justin B. Larsen and Madsen, UC Davis (Chem 2A/2C):** Explicitly map z-score bands to letter grades on the official course site, with the B/B+ cutoff at 1 SD above the mean and A/A+ at 2 SD.
- **Gary J. Pielak, UNC Chapel Hill (CHEM 430):** Set letter cutoffs as SD-bands in the syllabus; a *Daily Tar Heel* article (January 2026) documents a student controversy when "A's became B's and B's became C's" after the standard-deviation-based cutoff was applied.
- A widely-circulated industry write-up (GradeHub) describes a generic "standard z-score grading scale" with C centered on ±0.5 SD and one-SD steps for B and A. This is folklore-level standard practice in some quantitative classrooms but is documented nowhere as institutional policy outside the chemistry/physics syllabi above.

**Textbook treatment.** University of Illinois's Center for Innovation in Teaching & Learning recommends z- or T-score *combination* of components ("A practical solution to combining several weighted components is to first transform raw scores to standard scores, z or T, before applying relative weights and adding"), citing Linn & Gronlund (1995), Ebel & Frisbie (1991), Ory & Ryan (1993), Terwilliger (1971), and Mehrens & Lehmann (1973). None of these endorse z-score-to-letter as the *final* course mapping; they endorse it as the *intermediate* step before applying a criterion-referenced cutoff.

**Bottom line for the literal question:** there is no peer-reviewed book or paper devoted to "let final grades be z-scores." The literature treats z-scores as one input among many. The Achievement Index (Johnson 1997, 2003) is the closest thing to a sustained, book-length statistical case for normalizing grades across courses — and it explicitly *rejects* pure z-scores in favor of a Bayesian latent-trait model.

### 2. Quebec's Cote R (Cote de rendement au collégial)

Used since 1995 by Quebec universities to rank Cégep (junior-college) students for limited-enrollment program admission, particularly medicine, pharmacy, dentistry, and law. The post-2017 formula is:

  **R = ((Z_col × IDGZ) + ISGZ + C) × D**

Where:
- **Z_col** is the conventional within-course z-score (capped at ±3.0).
- **ISGZ** ("indicator of group strength") is the average of the group's secondary-school Z-scores in MEES uniform exam subjects. It directly compensates students in stronger cohorts.
- **IDGZ** ("indicator of group dispersion") is the SD of those secondary-school Z-scores; it scales how much within-course rank should count when the cohort is heterogeneous.
- **C = 5, D = 5**, so R typically lands in [15, 35] with a population mean near 25.

A weighted average across all courses (weighted by credit units; failures count at 25% credit in the first term, 50% thereafter) gives the global R.

**How close is it to a pure z-score?** Cote R *is* a z-score, dressed up. Multiplying by IDGZ shrinks the contribution of within-group rank when the group is homogeneous (which is exactly when small differences in raw score are noise). Adding ISGZ inserts a cohort-strength bonus. The Bureau de Coopération Interuniversitaire (BCI) document "The R Score: What It Is and What It Does" (Sept. 2020) explains: "Converting grades to Z scores so that they can be compared from one course to another and from one college to another rests on the principle that all grade distributions are identical. While this postulate is impossible to verify, it must be accepted if there is to be a relatively objective basis."

**Does it work?** Imperfectly. The R-score remains *the* admissions criterion for the most competitive Quebec programs, with cutoffs sometimes discriminating between candidates at 0.5 R-score increments. Criticisms:
- The Fédération étudiante collégiale du Québec (FECQ) argued in 2022 that the metric disadvantages certain groups, programs, or colleges and called for an independent investigation.
- Students in strong Cégeps complain the ISGZ adjustment is too small to offset competition with elite peers.
- "Cote R culture" produces gaming behaviors (course-shopping, strategic withdrawals, transferring to weaker Cégeps).
- The R-score has been modified in 1995 (introduction of R), in 1999 (uniform 0.5 point increase plus IB/DEC science boost), in 2005 (further DEC boosts), and in 2017 (modified group-strength indicator) — four substantive reformulations in 30 years, evidence that the underlying statistical artifact is not stable.

**Verdict:** Cote R is the strongest institutional case that z-score-style grading is operationally feasible, but it is also the strongest case that pure z-scores need substantial doctoring to be politically and statistically defensible. After 30 years of refinement it still produces enough perceived injustice to drive periodic structural reviews.

### 3. Forced Bell Curve & Norm-Referenced Grading: History

Letter grades were borrowed from Mount Holyoke (1887) and standardized via the early "scientific grading" movement, which assumed exam scores would be approximately normal and explicitly recommended bell-curve grading for large classes. Until the Vietnam War, C was the modal college grade (Rojstaczer's gradeinflation.com). The bell curve was, per Schneider & Hutt (2013), the "silent partner" of mid-20th-century U.S. grading.

Three developments dismantled norm-referenced grading in the 1960s–70s:
- **Robert Glaser, "Instructional Technology and the Measurement of Learning Outcomes," *American Psychologist* (1963)** introduced criterion-referenced measurement. Glaser's argument was that if instruction works, score variability collapses, and rank-based interpretation becomes meaningless.
- **Mastery learning (Bloom 1968, 1971)** institutionalized the idea that all students could and should reach a fixed competency standard.
- **Vietnam draft deferments** made low grades existentially dangerous for male students, putting practical pressure on faculty.

The combined effect: norm-referenced grading was driven from undergraduate education almost entirely (except in some sciences and most law schools). Most U.S. law schools still grade on a mandatory curve — typically a B/B+ median, e.g., Northwestern requires ≤5% A+ and ≥10% B− or below; Duke requires all 1L courses to follow a mandatory distribution. The persistence of the curve in law uniquely traces to large law firms' reliance on class rank for hiring screens.

Popham's 2014 ASCD retrospective ("Criterion-Referenced Measurement: Half a Century Wasted?") argues criterion-referenced testing has not actually been implemented well, because most K–12 standardized tests retain norm-referenced design under criterion-referenced labels. This is relevant context: the move *away* from norm referencing was rhetorical more than methodological, and the current grade-inflation crisis is the bill arriving.

### 4. Grade Inflation Context & the Harvard Vote

The triggering event: **on May 20, 2026, the Harvard Faculty of Arts and Sciences voted 458–201 to cap A grades at 20% of students per course (plus four additional A's, to cushion small classes), effective Fall 2027.** A separate motion to allow opt-out via Unsatisfactory/Satisfactory/Satisfactory-plus marks was rejected 364–292. The faculty also voted to use **average percentile rank** for internal honors and awards (Inside Higher Ed, May 20, 2026) — meaning Harvard has effectively imported a form of relative ranking, though not z-scores.

Context (Inside Higher Ed, Boston Globe, WBZ):
- 66% of Harvard undergraduates earned A's in 2024–25; 84% earned A or A-minus.
- The Harvard Undergraduate Association's February 2026 survey of 800 undergraduates found 85% opposed the cap.
- Government professor Steven Levitsky: "It's not a great solution. It's kind of clumsy and arbitrary and takes away some faculty autonomy, but we've just gotten to the point where everybody expects an A all the time."

**Prior elite-institution policy interventions:**
- **Princeton (2004–2014):** Dean Nancy Malkiel's policy recommended ≤35% A's per department. A% dropped from 47% to 41.8% over the policy's life, but the policy was abandoned by faculty vote in October 2014 after a committee report concluded the perception of unfair restriction was harming admissions yield and student morale. Grades immediately rebounded; by 2024–25, 66.7% of Princeton course grades were A-range.
- **Wellesley (2004–present):** Capped course averages at B+ (3.33) in 100/200-level classes ≥10 students. Butcher, McEwan & Weerapana (2014, *Journal of Economic Perspectives*) found professors complied by reducing top-grade compression; the cap reduced humanities/social-science enrollments and majors, lowered student evaluations of affected professors, and modestly expanded racial gaps in grades. It is still in effect — the only successful long-running cap at an elite U.S. institution.
- **Cornell (1998/2008–2023):** Posted course median grades online (1998), then on transcripts (2008). Bar, Kadiyali & Zussman (2009, *JEP*) found this *accelerated* grade inflation by inducing students to shop for leniently graded courses. Online posting was removed in 2011; transcript posting was removed in December 2023 (Faculty Senate Resolution 193).
- **Dartmouth (1994–present):** Lists class median and enrollment alongside the student's grade on transcripts, plus a summary "exceeded the median grade in N courses" — the longest-running implementation of percentile-context grading at an Ivy.

**The intellectual lineage** of the inflation argument runs through **Stuart Rojstaczer & Christopher Healy**, "Grading in American Colleges and Universities" (*Teachers College Record*, 2010) and "Where A is Ordinary" (*Teachers College Record*, 2012), which assembled grading data from over 400 institutions. A's rose from ~15% of grades in 1940 to ~43% by 2008, with no corresponding rise in student aptitude.

### 5. ELO / IRT / Adjusted Ranking Approaches

This is where Tim Fallon's reading queue gets interesting, because Hunter Shain's ELO suggestion is *closer to the actual research frontier* than Kosuri's z-score proposal.

**Valen E. Johnson** is the most important author here. His 1997 paper in *Statistical Science* ("An Alternative to Traditional GPA for Evaluating Student Performance") proposed a Bayesian latent-trait Achievement Index, a model in which observed grades are ordinal outcomes generated by latent student ability and latent course difficulty. Johnson explicitly argued GPA was "inferior to a rank statistic" and proposed the model as a replacement for class rank at Duke. The Duke Arts & Sciences Council voted 19–14 against adopting it in March 1997. Johnson's 2003 Springer book *Grade Inflation: A Crisis in College Education* expanded the case.

**Vanderbei, Scharf & Marlow (2014)**, "A Regression Approach to Fairer Grading," *SIAM Review* 56(2): 337 — perhaps the most accessible technical treatment. They model each grade as student aptitude minus course difficulty plus noise, then solve by least squares. Princeton Alumni Weekly's writeup explicitly used the ELO/BCS-tournament analogy: "Grading data form a 'landscape of pairwise comparisons,' with thousands of students choosing from hundreds of course options. It's comparable to major college football."

**Caulkins, Larkey & Wei (1996)**, "Adjusting GPA to Reflect Course Difficulty" (Heinz School, CMU) — proposes three adjustment methods and finds adjusted GPAs correlate better with high-school GPA and SAT than raw or IRT-adjusted GPAs.

**John W. Young (1990, 1991)**, *Journal of Educational Measurement* — explicit IRT-based GPA, fitted on Stanford transcripts. Demonstrates that IRT-adjusted GPA reduces the systematic under-prediction of women's grades by SAT scores.

**Chen, Hartline & Zoeter (2023)**, "Fair Grading Algorithms for Randomized Exams," arXiv:2304.06254 — uses the Bradley-Terry-Luce model (the static analog of Elo) on student-question pairs and shows consistency under realistic data conditions.

**Wittman (2022)**, "Average Rank and Adjusted Rank Are Better Measures of College Student Success than GPA," *Educational Measurement: Issues and Practice* — empirically shows adjusted course rank outperforms raw grade as a predictor of upper-division performance.

**Negative finding worth flagging:** despite ~25 years of paired-comparison and IRT work on grade adjustment, *no one has yet published an "Elo for transcripts" proposal* — i.e., an online sequential rating procedure that updates each student's rating after each course is graded. This is a real literature gap. Mathematically Elo is just BTL with a particular K-factor update, but the operational simplicity of an Elo rating may be more palatable than a one-shot IRT estimation for institutional adoption.

### 6. Corporate Performance Evaluation: The Crucial Counter-Trend

If the Harvard A-cap and z-score grading suggestions feel like a reach for managerial rigor, it is worth noting that corporate America has been retreating from exactly these tools for over a decade.

**Jack Welch's vitality curve at GE (1981–2001)** divided employees into top 20%, vital 70%, and bottom 10%, with the bottom 10% fired annually. Welch claimed this produced GE's 28-fold earnings increase. In David Gelles's reckoning (*The Man Who Broke Capitalism*, 2022), it also produced what NPR called "Neutron Jack's" mass-layoff legacy. **GE announced the end of its annual stack-ranking process in August 2015** (CNBC, "General Electric Rethinks Its Annual Job Reviews," 19 Aug 2015), with full transition to Performance Development at GE (PD@GE) — emphasizing frequent manager-employee touchpoints via mobile app, without enforced quotas — across its ~300,000-person workforce targeted by end of 2016. Internal GE data referenced in the rollout noted employees had been "prioritizing short-term wins over innovation" under the old system.

**Microsoft killed stack ranking on November 12, 2013**, per EVP-HR Lisa Brummel's company-wide email that day (confirmed by SHRM, *Seattle Times*): "No more curve. We will continue to invest in a generous rewards budget, but there will no longer be a pre-determined targeted distribution. Managers and leaders will have flexibility to allocate rewards in the manner that best reflects the performance of their teams." Stack ranking was widely blamed (Vanity Fair's Kurt Eichenwald, *Microsoft's Lost Decade*, 2012; HBR's Marcus Buckingham, November 2013) for Microsoft's collaboration breakdown. Anecdotally, top performers avoided working together to keep their relative rankings high — exactly the failure mode that ungrading advocates predict for classrooms.

**Other abandonments:**
- **Adobe (2012)** ended annual reviews entirely.
- **Deloitte (2014)** adopted a "check-in" model with qualitative discussions, eliminating numerical ratings; internal surveys reportedly showed a 14-fold increase in time spent on development conversations.
- **Accenture (September 2015):** CEO Pierre Nanterme told the *Washington Post* on July 21, 2015 that the firm would disband rankings and annual reviews for all 330,000 employees starting in fiscal year 2016 (September 2015), saying: "All this terminology of rankings — forcing rankings along some distribution curve or whatever — we're done with that. We're going to evaluate you in your role, not vis-à-vis someone else who might work in Washington, who might work in Bangalore. It's irrelevant."
- **Gap Inc.** and many others followed.

The notable holdouts are Amazon (which retains a version with documented gender effects and the local nickname "Amholes"), and the recent quiet revival at Meta and other tech firms during the 2023–2024 layoff cycle, where stack-ranking-style processes are reportedly being used to choose who is cut (*Fast Company*, 2023).

**The causal academic evidence** is thin but interesting:
- **Iwan Barankay (Wharton)**, "Rank Incentives: Evidence from a Randomized Workplace Experiment" (n=1,754 furniture salespeople, three-year RCT, working paper / R&R *Management Science*): "Removing rank feedback actually increases sales performance by 11%, or 1/10th of a standard deviation. Second, only men (not women) change their performance." A second crowd-sourcing experiment (n=883) found ranked workers were *less* likely to return to work and less productive when they did.
- In *contrast*, **Azmat & Iriberri (2010)** on Basque high schoolers and **Bandiera, Barankay & Rasul (2012)** on UK university students found rank feedback *raised* student performance — the educational evidence cuts the other way. This is the most important nuance in the corporate-vs-academic comparison: students may respond differently than salespeople to relative information.

**Stewart, Gruys & Storm (2010)**, *Journal of Management & Organization*, "Forced distribution performance evaluation systems: Advantages, disadvantages and keys to implementation" — surveys the implementation literature.

**The implication for the grading debate:** the strongest argument for z-score grading (signal preservation; resistance to inflation; comparability) is identical to the strongest argument for stack ranking in firms. The strongest arguments against — collaboration destruction, gaming, zero-sum competition, the punishment of strong cohorts, the gender/race differential of rank-feedback — are also identical. Corporations have ~20 years of natural-experiment evidence; they have largely chosen to abandon the tool. That should at minimum raise the bar for universities adopting it.

### 7. Related / Adjacent Ideas

**Ungrading** (Susan D. Blum, ed., *Ungrading: Why Rating Students Undermines Learning (and What to Do Instead)*, West Virginia University Press, 2020) is the principled rejection of *any* sorting function for grades. Blum (anthropologist, Notre Dame), Alfie Kohn (foreword), Jesse Stommel, Cathy N. Davidson and others document gradeless practice across K–12 and higher ed. Conceptually orthogonal to z-score grading: ungraders want to abolish the signal; z-score advocates want to sharpen it.

**Mastery / competency-based grading** (Bloom 1968; modern standards-based grading) is the heir to Glaser's 1963 criterion-referenced program. The Nebraska Center for Transformative Teaching's review and the *Teaching More by Grading Less* literature (Schinske & Tanner, *CBE-Life Sciences Education*, 2014) frame it as the principled alternative to curving.

**Percentile-on-transcript** is the partial middle road. **Dartmouth** has reported class median and enrollment on transcripts since the 1994 faculty vote and is still doing it. **Cornell** tried it from 2008–2023 and just abandoned it. **McGill** and **UC San Diego** also report context. Harvard's new policy adds *average percentile rank* for internal awards.

**Latin honors thresholds** at most U.S. universities are nominally criterion-based (≥3.9 GPA for summa, etc.) but are functionally rank-based at inflation extremes (Harvard's summa cum laude is awarded to roughly the top 5% of the class — effectively a percentile cutoff). Butcher et al. found Wellesley's cap affected magna cum laude eligibility, the only meaningful sorting still produced by U.S. transcripts at many places.

### 8. Arguments For and Against — Synthesized

**For (z-score / relative grading):**
1. Cross-class and cross-instructor comparability (Kosuri's core point).
2. Structural resistance to inflation: by construction, the mean is fixed.
3. Signal preservation for downstream consumers. Per NACE's *Job Outlook 2019*, 73.3% of responding employers screened candidates by GPA — "its highest level since the 2013 recruiting year" per the report — typically at a 3.0 cutoff. (By NACE's *Job Outlook 2023* that figure had collapsed to 37%, plausibly because inflation has made the cutoff useless — itself an argument for restoring discrimination at the top of the distribution.)
4. Incentivizes instructors to expose deeper material — if everyone gets an A regardless, there is no instructional return to making the course harder (Kosuri's stated reason).
5. Eliminates the political pressure on individual instructors to inflate; the problem becomes structural rather than personal, which Wellesley's economists found made faculty more comfortable holding the line.

**Against:**
1. **Zero-sum competition** damages collaboration. Microsoft's "lost decade" thesis (Eichenwald 2012; Buckingham, HBR 2013) is the canonical case; Barankay's RCT is the cleanest evidence.
2. **Punishes strong cohorts.** This is the *single most important problem* and the reason Cote R has its ISGZ adjustment. A student in a freshman cohort full of Olympiad medalists gets a worse transcript than the same student in a weak cohort. Sri Lanka's district-quota system exists to manage essentially this problem at the macro level; Quebec's ISGZ exists to manage it at the cohort level. Pure z-scores have no fix.
3. **Depends on cohort size and shape.** With small classes (n<20), the z-score is noisy and the top-end z is bounded by ~√n. Harvard's 20%+4 rule explicitly cushions small classes; a pure z-score system cannot.
4. **Assumes approximate normality.** Real classroom score distributions are often bimodal (mastery/non-mastery) or skewed; a z-score on a bimodal distribution mis-ranks the modes.
5. **What happens at the bottom?** Pure z-scores guarantee a population of failing students every term, regardless of how well-taught the course is. This is the criterion-referenced critique (Glaser 1963; Bloom 1968).
6. **Selection effects.** Students self-select into courses; the *enrollment* of a course is endogenous to the grade signal. Cornell's experiment (Bar, Kadiyali, Zussman 2009) is the empirical proof that publishing course-level distributional information distorts course choice.
7. **Cohort definition is contestable and political.** The 2011 Sri Lankan A-level lawsuit (Supreme Court of Sri Lanka, 2012) turned entirely on whether two syllabi defined one cohort or two. Z-score grading transfers the political fight from "what is excellent?" to "who counts as comparable?"
8. **Gender and race effects.** Barankay's results were almost entirely driven by men; Butcher et al. found Wellesley's cap "expanded racial gaps in grades." Rank-based and cap-based grading have heterogeneous effects across demographic groups.

## Recommendations

**For Kosuri's tweet, as a policy proposal:** I would not implement raw z-scores as transcript grades. The evidence base — Cote R's 30-year struggle, Sri Lanka's litigation, Microsoft's collapse, Princeton's failed deflation, Barankay's field experiments — is uniformly cautionary. If the goal is rescuing signal at the elite-university transcript margin, four concrete moves are better-supported:

1. **Adopt Dartmouth-style context reporting**: print class median and enrollment alongside the grade. This is the cheapest, lowest-disruption move and has 30 years of operation without major problems (notably *unlike* Cornell's online posting). It restores signal without forcing distributions.

2. **For internal honors and major-specific GPA, use an IRT-adjusted or Vanderbei-style regression-adjusted GPA computed from transcript data after the fact**, rather than the raw mean. This is what Wittman (2022) shows works best and avoids any change to faculty behavior. The technology is mature and could be implemented at any university in a semester.

3. **If a hard cap is desired, prefer Wellesley's mean cap (B+) to Harvard's count cap (20% A's plus four).** Mean caps preserve faculty discretion to give a strong cohort more A's offset by more B's; count caps create the precise zero-sum dynamics that wrecked Microsoft. Butcher et al.'s analysis of Wellesley remains the best causal evidence we have.

4. **Avoid pure z-scores as final grades.** If you want comparability across instructors, the right intermediate-statistical object is the *adjusted* z-score (Cote R-style) at minimum, and ideally a latent-trait estimate (Johnson 1997, Vanderbei 2014). The 30-year Quebec experience says the adjustments are non-optional.

**Benchmarks that would change these recommendations:**
- *If* Harvard's 20%-A cap reports show, after the 3-year review (~2030), that GPA compression rose **without** the cratering of collaboration, female and minority enrollment in capped departments, and yield/admissions effects that Wellesley and Princeton saw — then count caps become defensible elsewhere.
- *If* a major university pilots Vanderbei/Johnson-style adjusted GPA on internal honors and replicates Wittman's predictive-validity finding — then the adjusted-GPA route becomes the dominant alternative.
- *If* tech companies that recently revived stack ranking (Meta, Amazon) report sustained productivity gains over five years, that would weaken the corporate-counter-trend argument; current evidence (Fast Company 2023; Barankay's RCTs) is the other way.

**For Tim's reading queue specifically:** I'd start with Vanderbei et al. 2014 (technical but readable, *SIAM Review*), Johnson 2003 (book-length case), Butcher et al. 2014 (causal evidence), and the BCI 2020 Cote R primer (the operational state-of-the-art). Then read Blum 2020 for the philosophical opposition, and Gelles 2022 plus Barankay's work for the corporate side.

## Caveats

- **Source asymmetry.** The Sri Lanka literature is heavily Sinhala/Tamil-language and a non-trivial fraction is partisan press; the medium.com primer cited is the most accessible English explainer. Original UGC technical documents are referenced but not directly fetched.
- **Cote R formula variants.** The 2017 modification is not fully transparent in public documents; I rely on the BCI 2020 white paper, Wikipedia, and college explainers (Vanier, RScology). Some published formulas differ in constants from the BCI primer; I have presented the BCI version.
- **Harvard policy details.** The vote was May 19–20, 2026; reporting on the percentile-rank-for-honors provision came principally from Inside Higher Ed and is not yet codified in public FAS rules. The full rule text and any opt-out clarifications post-vote should be checked when published.
- **Barankay's RCT result is conditional.** It applies to commission-based salespeople with the option to switch tasks. Educational settings — particularly required courses — restrict the substitution behavior that drives Barankay's effect. The Azmat/Iriberri and Bandiera/Barankay/Rasul student-rank studies cut the other way, and Tim should weight them appropriately.
- **No "Elo for transcripts" prior art.** Hunter Shain's tweet may genuinely be a novel suggestion at the implementation level, even if Bradley-Terry-Luce and IRT cover the underlying mathematics. This is a publishable gap.
- **Speculative content.** Future-tense statements about Harvard's 2027 implementation, Meta's stack-ranking outcomes, and "if a major university pilots" benchmarks are by nature predictive and should not be presented as established facts.

---

## Annotated Reading List

| Source (title, author, year) | Type | Topic / Relevance | Key takeaway |
|---|---|---|---|
| Glaser, R. "Instructional Technology and the Measurement of Learning Outcomes," *American Psychologist*, 1963 | Paper (foundational) | Origin of criterion- vs. norm-referenced distinction | The intellectual root of moving *away* from curve grading; necessary context for understanding why pure z-scores are a regression |
| Johnson, V.E. "An Alternative to Traditional GPA for Evaluating Student Performance," *Statistical Science* 12(4):251–278, 1997 | Paper | Bayesian latent-trait Achievement Index, proposed (and rejected) at Duke 1997 | The single most rigorous statistical alternative to GPA; the "right way" to do what z-scores try to do |
| Johnson, V.E. *Grade Inflation: A Crisis in College Education*, Springer, 2003 | Book | Book-length argument and Bayesian methodology | The textbook for this entire debate; should be the first stop |
| Vanderbei, R., Scharf, G., Marlow, D. "A Regression Approach to Fairer Grading," *SIAM Review* 56(2):337, 2014 | Paper | Least-squares model for course-difficulty adjustment | Most accessible technical treatment; uses an explicit Elo/BCS-tournament analogy |
| Caulkins, J.P., Larkey, P.D., Wei, J. "Adjusting GPA to Reflect Course Difficulty," Heinz School/CMU, 1996 | Working paper | Comparison of three GPA-adjustment methods vs. raw GPA and IRT | Empirical comparison; adjusted GPAs outperform raw and IRT-adjusted on predictive validity |
| Young, J.W. "Adjusting the Cumulative GPA Using Item Response Theory," *Journal of Educational Measurement* 27(2):175–186, 1990 | Paper | IRT-based GPA adjustment using Stanford data | First IRT application to GPA; reduces systematic under-prediction of women's grades |
| Wittman, D.A. "Average Rank and Adjusted Rank Are Better Measures of College Student Success than GPA," *Educational Measurement: Issues and Practice*, 2022 | Paper | Rank-based metrics outperform GPA as predictors | Recent empirical confirmation; pragmatic argument for some form of relative grading |
| Chen, Y., Hartline, J., Zoeter, O. "Fair Grading Algorithms for Randomized Exams," arXiv:2304.06254, 2023 | Paper (arXiv) | Bradley-Terry-Luce on student-question pairs | Closest formal "Elo for grading" — but at item level, not transcript level |
| Pelánek, R. "Applications of the Elo Rating System in Adaptive Educational Systems," *Computers & Education*, 2016 | Paper | Elo for adaptive testing | Demonstrates Elo's robustness in educational settings; not for transcripts |
| Bureau de Coopération Interuniversitaire (BCI). "The R Score: What It Is and What It Does," September 2020 | Policy document | Authoritative Cote R primer | The Quebec institutional state-of-the-art for z-score-based admissions ranking |
| R-Score (Wikipedia) | Reference | Cote R formula history and critiques | Quick orientation; documents 1995, 1999, 2005, 2017 reformulations |
| Butcher, K.F., McEwan, P.J., Weerapana, A. "The Effects of an Anti-Grade-Inflation Policy at Wellesley College," *Journal of Economic Perspectives* 28(3):189–204, 2014 | Paper | Causal effects of a B+ class-mean cap | Best causal evidence on grade caps; modest top-end compression; reduced humanities enrollment; expanded racial gaps |
| Bar, T., Kadiyali, V., Zussman, A. "Grade Information and Grade Inflation: The Cornell Experiment," *Journal of Economic Perspectives* 23(3):93–108, 2009 | Paper | Effect of publishing median grades on inflation | Surprising: publishing context *accelerated* inflation by inducing course-shopping |
| Rojstaczer, S., Healy, C. "Where A is Ordinary: The Evolution of American College and University Grading, 1940–2009," *Teachers College Record* 114(7), 2012 | Paper | Long-run national grading trends | The standard reference for the magnitude and chronology of U.S. grade inflation |
| gradeinflation.com (Rojstaczer database) | Public dataset | Ongoing grade data from 400+ schools | The empirical baseline for any inflation claim |
| Popham, W.J. "Criterion-Referenced Measurement: Half a Century Wasted?," ASCD *Educational Leadership*, 2014 | Essay | Retrospective on Glaser's program | Why the move away from norm referencing has not delivered what was promised |
| Schinske, J., Tanner, K. "Teaching More by Grading Less (or Differently)," *CBE-Life Sciences Education* 13:159–166, 2014 | Paper | Critical review of grading practice | Best concise critique of curved grading from inside STEM education |
| "Princeton Faculty Committee Recommends Ending Grade Deflation Targets," *Princeton Alumni Weekly*, August 7, 2014 (and follow-up coverage) | News / policy document | History of Princeton's 2004–2014 deflation policy | The canonical failed-experiment case study |
| "Re-Centering Academics at Harvard College," internal report, October 2025; coverage in Inside Higher Ed, Boston Globe, Harvard Crimson, May 20–21, 2026 | Policy document + news | Harvard 20%-A cap vote, May 2026 | The triggering event; also note Harvard's adoption of percentile rank for honors |
| Blum, S.D. (ed.) *Ungrading: Why Rating Students Undermines Learning (and What to Do Instead)*, West Virginia University Press, 2020 | Book (edited volume) | The ungrading movement | The principled opposite of z-score grading; required for steelmanning the other side |
| Welch, J., Byrne, J.A. *Jack: Straight from the Gut*, Warner Books, 2001 | Memoir | Origin of the vitality curve | Source for "20-70-10"; useful for the historical claim |
| Gelles, D. *The Man Who Broke Capitalism: How Jack Welch Gutted the Heartland and Crushed the Soul of Corporate America*, Simon & Schuster, 2022 | Book | Critical reassessment of GE's stack ranking | Standard counter-narrative; useful for the corporate cautionary tale |
| Eichenwald, K. "Microsoft's Lost Decade," *Vanity Fair*, August 2012 | Long-form journalism | Stack ranking blamed for Microsoft's stagnation | The article that mobilized opposition; preceded Microsoft's 2013 abandonment |
| Buckingham, M. "Trouble with the Curve? Why Microsoft is Ditching Stack Rankings," *Harvard Business Review*, November 19, 2013 | Article | The end-of-stack-ranking case | Concise managerial summary |
| CNBC, "General Electric Rethinks Its Annual Job Reviews," August 19, 2015 | News | GE's August 2015 abandonment of stack ranking | The bookend to the vitality-curve era |
| McGregor, J. "Accenture Joins the Move to Drop Annual Reviews," *Washington Post*, July 21, 2015 (Nanterme interview) | News | Accenture's September 2015 disbanding for 330,000 employees | "We're done with that" — clearest corporate-leader rejection of forced ranking |
| Brummel, L. internal Microsoft memo, November 12, 2013 (text quoted in SHRM, *Seattle Times*) | Internal document (corroborated) | Microsoft's official end of the curve | "No more curve … no longer be a pre-determined targeted distribution" |
| Barankay, I. "Rank Incentives: Evidence from a Randomized Workplace Experiment," Wharton working paper (R&R *Management Science*) | Working paper / RCT | Three-year furniture-salesperson field experiment, n=1,754 | Removing rank feedback raised performance 11% (men only); cleanest causal evidence on rank feedback |
| Azmat, G., Iriberri, N. "The importance of relative performance feedback information," *Journal of Public Economics*, 2010 | Paper | Basque high-school natural experiment | The counter-evidence: rank info raises *student* performance |
| Bandiera, O., Barankay, I., Rasul, I. "Team Incentives: Evidence from a Firm Level Experiment," *Journal of the European Economic Association*, 2012 | Paper | UK university feedback experiment | Rank feedback raised student performance; complicates the cross-domain analogy |
| Stewart, S., Gruys, M., Storm, M. "Forced distribution performance evaluation systems," *Journal of Management & Organization* 16(1):168–179, 2010 | Paper | Implementation literature on forced ranking | Best HR-side review of when (if ever) forced ranking works |
| NACE, *Job Outlook 2019* (and *Job Outlook 2023* follow-up) | Industry survey | GPA-screening rates among U.S. employers | 73.3% used GPA cutoffs in 2019 (typically 3.0); 37% by 2023 — measure of the signal collapse z-score grading aims to fix |
| Dedduwage, C. "Sri Lankan University Admissions Demystified: Z-score, District Quota, and Other Factors," Medium, 2020 | Blog | English-language primer on the Sri Lankan Z system | Most accessible explanation of the only large-scale literal z-score system |
| "Zeroing on Z-score fiasco," *The Sunday Times* (Sri Lanka), July 1, 2012 | News | The 2011 A/L crisis and Supreme Court ruling | Cautionary tale about cohort definition |
| Mueller, O. "Grading Policies," ottohmuller.com (Alfred University) | Syllabus / personal page | Documented individual instructor using z-score-to-letter | One of very few documented North American instances of literal z-score grading |
| Larsen, J.B. / Madsen course pages, UC Davis Chem 2C/2A (LibreTexts ChemWiki) | Course page | UC Davis chemistry z-score grading | Institutional examples of z-score-to-letter mapping in real undergraduate courses |
| *Daily Tar Heel*, "University Biochem Fall Exam Curve Controversy," January 2026 | News | UNC CHEM 430 (Pielak) student dispute over SD-band cutoffs | Live case study of the student-experience side of z-score grading |
| University of Illinois CITL, "Assigning Course Grades" (citl.illinois.edu) | Teaching center guide | Recommends z/T-score combination of components | Mainstream educational-measurement practice, citing Linn & Gronlund 1995, Ebel & Frisbie 1991 |
| List of law school GPA curves (Wikipedia) | Reference | Compiled mandatory-curve policies at U.S. law schools | Useful for documenting the persistence of forced curves where employment markets demand a class-rank signal |
| Cornell Faculty Senate Resolution 193, December 15, 2023 | Policy document | Removal of median grades from Cornell transcripts | The end of the Cornell median-on-transcript experiment after 15 years |
| Dartmouth Registrar, "Median Grades for Undergraduate Courses" | Policy document | Live example of context-on-transcript reporting | Operational reference for any university considering a Dartmouth-style implementation |