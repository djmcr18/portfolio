<template>
    <div class="cv-container">
        <!-- LEFT PANEL -->
        <div class="left-panel">
            <div class="profile-pic-container">
                <img class="profile-pic" src="../assets/images/SoccerDP.jpg" alt="Diego Miranda Ciudad Real">
                <div class="name-overlay">Diego Miranda Ciudad Real</div>
            </div>
            <h5 style="text-align:center;"><strong>Information Technology Student</strong></h5>
            
            <!-- Contact Information -->
            <section class="contact-info">
                <div class="contact-item">
                <i class="fas fa-envelope"></i> <a href="mailto:diego.mirandacr.18@gmail.com">diego.mirandacr.18@gmail.com</a>
                </div>
                <i class="fas fa-phone"></i> 04XX XXX XXX <br>
                <i class="fas fa-map-marker-alt"></i> Melbourne, Victoria <br>
                <i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/diego-miranda-22bb51269" target="_blank">Diego Miranda</a>
            </section>
            
            <!-- Skills -->
            <section class="skills">
                <h3 style="text-align:center;"><i class="fas fa-wrench"></i> Key Skills</h3>
                <ul class="skill-list">
                    <li><i class="fas fa-drafting-compass"></i> AutoCAD</li>
                    <li><i class="fas fa-file-word"></i> Microsoft Office</li>
                    <li><i class="fas fa-tools"></i> Bluebeam</li>
                    <li><i class="fas fa-headset"></i> Customer Service</li>
                    <li><i class="fas fa-users"></i> Team Player</li>
                    <li><i class="fas fa-brain"></i> Analytical Thinker</li>
                    <li><i class="fas fa-lightbulb"></i> Problem Solving</li>
                    <li><i class="fas fa-eye"></i> Attention to Detail</li>
                    <li><i class="fas fa-comments"></i> Strong Communication</li>
                </ul>
            </section>

            <!-- Languages -->
            <section class="languages">
                <h3 style="text-align:center;"><i class="fas fa-language"></i> Languages</h3><br>
                <div class="language">
                    <label style="text-align:center;">English</label>
                    <div class="progress">
                        <div class="progress-bar" style="width: 100%;"></div>
                    </div>
                </div>
                <div class="language">
                    <label style="text-align:center;">Spanish</label>
                    <div class="progress">
                        <div class="progress-bar" style="width: 80%;"></div>
                    </div>
                </div>
            </section>

            <!-- Certifications -->
            <section class="certifications">
                <h3 style="text-align:center;"><i class="fas fa-certificate"></i> Certifications</h3>
                <p style="text-align:center;"><i class="fas fa-check"></i> <strong>Football Coaching C Licence</strong></p>
                <p style="text-align:center;"><i class="fas fa-check"></i> <strong>Working With Children Check</strong></p>
            </section>
        </div>

        <!-- RIGHT PANEL -->
        <div class="right-panel">
            <!-- Summary -->
            <div class="section-container">
                <section class="summary">
                    <h2><i class="fas fa-user"></i> Summary</h2>
                    <p>Information Technology student with a strong passion for the field, specifically cybersecurity. Interested in career opportunities that can help kickstart a career in the IT/Engineering sector whilst completing tertiary studies.</p>
                </section>
            </div>

            <!-- Work Experience -->
            <div class="section-container">
                <section class="work-experience">
                    <h2><i class="fas fa-briefcase"></i> Career History</h2>
                    <div class="job">
                        <h4>Retail Assistant at Kmart (Part Time)</h4>
                        <p>July 2021 – Present</p>
                        <ul>
                            <li>Provide customer service whilst working with other team members to ensure a positive customer experience.</li>
                            <li>Work towards KPIs and assist other team members to achieve the store’s sales targets.</li>
                            <li>Lead the online orders team to ensure hundreds of orders are fulfilled and targets are met on a daily basis.</li>
                        </ul>
                    </div>
                    <br>
                    <div class="job">
                        <h4>Electrical Draftsperson at RoyalCity Pro-Services Pty Ltd (Part Time)</h4>
                        <p>July 2020 – December 2023</p>
                            <p>Responsibilities included the updating of:
                                Drawing lists,
                                Single Line Diagrams,
                                panel layout,
                                label details,
                                AC schematics,
                                DC schematics, and 
                                as builts based on provided red mark ups.
                            </p>
                    </div>
                    <br>
                    <div class="job">
                        <h4>Football Coach (NPL) at Green Gully SC</h4>
                        <p>February 2018 – 2022</p>
                        <ul>
                            <li>Maintain a high level of communication with team managers, technical directors, players and parents.</li>
                            <li>Manage and control both small and large groups of players of various ages.</li>
                            <li>Lead and teach by example, ensure everyone is content and understanding given instructions.</li>
                        </ul>
                    </div>

                </section>
            </div>

            <!-- Education -->
            <div class="section-container">
                <section class="education">
                    <h2><i class="fas fa-graduation-cap"></i> Education</h2>
                    <div class="degree">
                        <h4>Bachelor of Information Technology</h4>
                        <p>Deakin University, 2023 - Present</p>
                    </div>
                    <div class="degree">
                        <h4>Victorian Certificate of Education</h4>
                        <p>Marcellin College, Graduated 2017</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>

document.addEventListener("DOMContentLoaded", function() {
    var bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar) {
        var width = bar.style.width;
        bar.style.width = '0';
        setTimeout(function() {
            bar.style.width = width;
        }, 50);
    });
});

</script>
<style scoped>
.cv-container {
    display: flex;
    padding: 15px;
    justify-content: space-between;
}

.profile-pic-container {
    position: relative;
    margin: -15px -15px 20px; /* Adjust this line to remove the padding on top and sides */
    overflow: hidden; /* Makes sure the name overlay doesn't overflow */
}

.profile-pic {
    width: 100%;
    display: block;
    object-fit: cover; /* This ensures the image isn't distorted */
}

.name-overlay {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0; /* Ensures the overlay stretches the full width of the image */
    text-align: center; /* Centers the text horizontally */
    color: #fff;
    font-weight: bold;
    text-shadow: 2px 2px 8px #000;
    background: rgba(0, 0, 0, 0.5); /* Slight background to improve readability */
    padding: 5px 0; /* Some padding to give space above and below the text */
    font-size: 19.5px;
}

.left-panel {
    flex: 1 1 25%;
    padding: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    margin-right: 15px;
}

.left-panel p, .left-panel a {
    font-size: 16px;
    margin-bottom: 10px;
}

.left-panel ul {
    margin: 0;
    padding-left: 15px;
}

.left-panel li {
    margin-bottom: 8px;
}

.left-panel .contact-info, .left-panel .skills, .left-panel .languages, .left-panel .certifications {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.skills .skill-list {
    list-style: none;
    padding: 1;
    margin-top: 40px;
}

.skills .skill-list li {
    padding-left: 40px; /* to give space for the icon */
    position: relative;
    font-size: 16px;
    margin: 18px 0;
}

.skills .skill-list li i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

h2 i, h3 i {
    margin-right: 10px;
    margin-left: 5px;
}
.contact-item {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.right-panel {
    flex: 1 1 75%;
    padding: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.section-container {
    margin-bottom: 30px;
    padding: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    background-color: #f9f9f9;
}

.section-container:last-child {
    margin-bottom: 0;
}

.contact-info, .skills, .languages {
    margin-bottom: 20px;
}

.skills ul, .work-experience .job ul {
    list-style-type: disc;
    margin-left: 20px;
}

.language label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.progress {
    background-color: #e0e0e0;
    border-radius: 25px;
    height: 20px;
    margin-bottom: 15px;
    overflow: hidden;
}

.progress-bar {
    background-color: #4CAF50;
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
}

/* Optional: Add a hover effect for some interactivity */
.progress:hover .progress-bar {
    filter: brightness(110%);
}

a {
    color: #007BFF;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@media only screen and (max-width: 768px) {
    .cv-container {
        flex-direction: column;
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }

    .left-panel, .right-panel {
        width: 100%;
        margin: 0; /* Reset any margins */
        padding: 0; /* Reset any padding */
        box-sizing: border-box; /* Ensure padding and border are included in the total width */
        margin-bottom: 15px;
    }
}
</style>