import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import Image from 'next/image';

export default function Skills(): JSX.Element {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Skills
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
        {/* Languages */}
        <SkillSection title="Languages">
          {renderTechnology("JavaScript", "icons/javascript-original.svg", 95)}
          {renderTechnology("HTML", "icons/html5-original.svg", 95)}
          {renderTechnology("CSS", "icons/css3-original.svg", 95)}
          {renderTechnology("Python", "icons/python-original.svg", 95)}
          {renderTechnology("TypeScript", "icons/typescript-original.svg", 90)}
          {renderTechnology("Java", "icons/java-original.svg", 85)}
          {renderTechnology("C++", "icons/cplusplus-original.svg", 85)}
          {renderTechnology("C#", "icons/csharp-original.svg", 80)}
          {renderTechnology("SQL", "/icons/sql-language-icon.png", 80)}
          {renderTechnology("C", "icons/c-original.svg", 80)}
          {renderTechnology("Bash", "icons/bash-original.svg", 80)}
          {renderTechnology("Kotlin", "icons/kotlin-original.svg", 70)}
          {renderTechnology("Go", "icons/go-original.svg", 70)}
          {renderTechnology("PowerShell", "icons/powershell-original.svg", 70)}
          {renderTechnology("Dart", "icons/dart-original.svg", 70)}
          {/* Add more languages */}
        </SkillSection>

        {/* Technologies */}
        <SkillSection title="Technologies">

          {/* Frontend */}
          <SkillSubsection title="Frontend Frameworks & Libraries">
            {renderTechnology("React", "icons/react-original.svg", 95)}
            {renderTechnology("Svelte", "icons/svelte-original.svg", 95)}
            {renderTechnology("Material UI", "icons/materialui-original.svg", 95)}
            {renderTechnology("Angular", "icons/angular-original.svg", 90)}
            {renderTechnology("Tailwind CSS", "icons/tailwindcss-original.svg", 90)}
            {renderTechnology("Next.js", "icons/nextjs-original.svg", 85)}
          </SkillSubsection>

          {/* Backend */}
          <SkillSubsection title="Backend Frameworks &amp; Libraries">
            {renderTechnology("Spring Boot", "icons/spring-original.svg", 95)}
            {renderTechnology("Flask", "icons/flask-original.svg", 90)}
            {renderTechnology("Node.js", "icons/nodejs-original.svg", 85)}
            {renderTechnology("GraphQL", "icons/graphql-plain.svg", 85)}
            {renderTechnology(".NET", "icons/dot-net-original.svg", 80)}
          </SkillSubsection>

          {/* Databases */}
          <SkillSubsection title="Databases &amp; Storage">
            {renderTechnology("PostgreSQL", "icons/postgresql-original.svg", 90)}
            {renderTechnology("MongoDB", "icons/mongodb-original.svg", 85)}
            {renderTechnology("MySQL", "icons/mysql-original.svg", 85)}
            {renderTechnology("Microsoft SQL Server", "icons/microsoftsqlserver-original.svg", 80)}
          </SkillSubsection>

          {/* DevOps */}
          <SkillSubsection title="DevOps &amp; Cloud">
            {renderTechnology("Docker", "icons/docker-original.svg", 95)}
            {renderTechnology("Linux", "icons/linux-original.svg", 95)}
            {renderTechnology("Azure DevOps", "icons/azuredevops-original.svg", 95)}
            {renderTechnology("AWS", "icons/amazonwebservices-original-wordmark.svg", 85)}
            {renderTechnology("Microsoft Azure", "icons/azure-original.svg", 85)}
            {renderTechnology("Kubernetes", "icons/kubernetes-original.svg", 80)}
          </SkillSubsection>

          {/* Mobile */}
          <SkillSubsection title="Mobile Development">
            {renderTechnology("Jetpack Compose", "icons/jetpackcompose-original.svg", 85)}
            {renderTechnology("Android", "icons/android-original.svg", 80)}
            {renderTechnology("Flutter", "icons/flutter-original.svg", 75)}
          </SkillSubsection>

          {/* Version Control */}
          <SkillSubsection title="Version Control &amp; CI/CD">
            {renderTechnology("Git", "icons/git-original.svg", 95)}
            {renderTechnology("GitHub", "icons/github-original.svg", 90)}
            {renderTechnology("GitHub Actions", "icons/githubactions-original.svg", 90)}
            {renderTechnology("GitLab", "icons/gitlab-original.svg", 90)}
          </SkillSubsection>

          {/* API Tools */}
          <SkillSubsection title="API &amp; Authentication Tools">
            {renderTechnology("Axios", "icons/axios-plain.svg", 90)}
            {renderTechnology("Postman", "icons/postman-original.svg", 90)}
            {renderTechnology("OAuth", "icons/oauth-original.svg", 80)}
          </SkillSubsection>

          {/* Build Tools */}
          <SkillSubsection title="Build &amp; Package Managers">
            {renderTechnology("npm", "icons/npm-original-wordmark.svg", 95)}
            {renderTechnology("Maven", "icons/maven-original.svg", 90)}
            {renderTechnology("Gradle", "icons/gradle-original.svg", 85)}
          </SkillSubsection>
          
          {/* Add more technologies */}
        </SkillSection>
      </Box>
    </Box>
  );
}

const renderTechnology = (name: string, icon: string, progress: number) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', mb: 1.5 }}>
    <Image src={icon} alt={name} width={24} height={24} />
    <Box sx={{ width: 120 }}>
      <Typography variant="body1">{name}</Typography>
    </Box>
    <LinearProgress variant="determinate" value={progress} sx={{ flexGrow: 1 }} />
  </Box>
);

const SkillSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box sx={{ width: '100%', maxWidth: 600 }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>{children}</Box>
  </Box>
);

const SkillSubsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box sx={{ mt: 2 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{children}</Box>
  </Box>
);