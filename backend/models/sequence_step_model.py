def create_sequence_step(
    step_number,
    delay_days,
    subject_template,
    body_template
):
    return {
        "stepNumber": step_number,
        "delayDays": delay_days,
        "subjectTemplate": subject_template,
        "bodyTemplate": body_template
    }