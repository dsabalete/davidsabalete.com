<template>
    <SectionApp id="experience">
        <template #title>{{ $t("experience_title") }}</template>

        <ResumeItem
            :position="$t('experience_job_1')"
            company="LoveToKnow Media Spain"
            :description="$t('experience_job_text_1')"
            period="November 2019 - Present"
        />

        <ResumeItem
            :position="$t('experience_job_2')"
            company="EDREAMS Odigeo"
            :description="$t('experience_job_text_2')"
            period="April 2018 - October 2019"
        />

        <ResumeItem
            :position="$t('experience_job_3')"
            company="CAPITOLE CONSULTING"
            :description="
                $t('experience_job_text_3_1') +
                '<br/>' +
                $t('experience_job_text_3_2') +
                '<br/>' +
                $t('experience_job_text_3_3')
            "
            period="April 2018 - October 2019"
        />

        <ResumeItem
            :position="$t('experience_job_4')"
            company="FIATC Seguros"
            :description="$t('experience_job_text_4')"
            period="June 2003 - July 2016"
        />

        <ResumeItem
            :position="$t('experience_job_5')"
            company="Institut Català de Tecnologia"
            :description="$t('experience_job_text_5')"
            period="June 2001 - May 2003"
        />

        <ResumeItem
            :position="$t('experience_job_6')"
            company="Secretariaplus.com"
            :description="$t('experience_job_text_6')"
            period="April 2000 - May 2001"
        />
    </SectionApp>
</template>
