export type EducationInfo = {
  university: string
  degree: string
  major: string
  graduationDate: string
}

export type ExperienceInfo = {
  position: string
  company: string
  locatoin: string
  dates: string
  contributions: string[]
}

export type CertificationInfo = {
  name: string
  hasLink: boolean
  link?: string
  organization: string
  date: string
}

export type SkillsInfo = {
  skillsGroup: string
  skills: string[]
}

export type ResearchInfo = {
  name: string
  hasLink: boolean
  link?: string
  ongoing: boolean
}

export type RewardsInfo = {
  name: string
  organization: string
  date: string
}

export type ProjectsInfo = {
  name: string
  hasLink: boolean
  link?: string
  date: string
  description: string[]
}

export type VolunteeringInfo = {
  position: string
  organization: string
  dates: string
  description: string
}
