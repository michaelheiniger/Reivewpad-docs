// Copyright (C) 2023 Explore.dev, Unipessoal Lda - All Rights Reserved
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

interface Version {
    label?: string;
    name: string;
    docsURL?: string;
    changelogURL?: string;
    stage?: string;
}

const nextVersion: Version = {
    label: 'Next',
    name: 'next',
    docsURL: '/next',
    stage: 'Unreleased',
}

const latestVersion: Version = {
    label: 'v4',
    name: 'v4',
    docsURL: '/',
    changelogURL: '/changelog',
    stage: 'Stable',
}

const pastVersions: Version[] = [
    {
        label: 'v3',
        name: 'v3',
        docsURL: '/v3',
        changelogURL: '/changelog#reviewpad-v3270',
        stage: 'LTS',
    },
    {
        label: 'v2',
        name: 'v2',
        changelogURL: '/changelog#reviewpad-v240',
        stage: 'Deprecated',
    },
    {
        label: 'v1',
        name: 'v1',
        changelogURL: '/changelog#reviewpad-v120',
        stage: 'Deprecated',
    },
]

const versions: Version[] = [
    nextVersion,
    latestVersion,
    ...pastVersions
]

function Intro() {
    return (
        <>
            <Heading as='h1'>Reviewpad documentation versions</Heading>
            <p>
                Welcome to the Reviewpad documentation version history page, where you can access a complete list of our product's documentation, including past and current versions. Here, you can find the stable version, as well as any previous versions that are no longer maintained. Additionally, you can preview the upcoming version that has not yet been released. Whether you are a new or returning user, this page serves as a valuable resource for accessing the information you need to make the most out of our product.
            </p>
        </>
    );
}

function VersionsTableRow({ version }: { version: Version }) {
    return (
        <tr>
            <th>{version.label}</th>
            <td>
                {version.docsURL && (
                    <Link to={version.docsURL}>
                        Documentation
                    </Link>
                )}
            </td>
            {version.changelogURL && (
                <td>
                    <Link to={version.changelogURL}>
                        Release Notes
                    </Link>
                </td>
            )}
            <td>
                {version.stage &&
                    <b>{version.stage}</b>
                }
            </td>
        </tr >
    );
}

function VersionsTable({ versions }: { versions: Version[] }) {
    return (
        <table>
            <tbody>
                {versions.map(version => <VersionsTableRow key={version.name} version={version} />)}
            </tbody>
        </table>
    );
}

interface VersionsIntroProps {
    header: string;
    description: string;
}

function VersionsIntro(props: VersionsIntroProps) {
    const { header, description } = props;

    return (
        <>
            <Heading as='h2'>{header}</Heading>
            <p>{description}</p>
        </>
    );
}

export default function Versions() {
    return (
        <Layout
            title="Versions"
            description="Reviewpad Versions page listing all documented site versions"
        >
            <main className="container margin-vert--lg">
                <Intro />
                <VersionsIntro
                    header='Current version (Stable)'
                    description='Here, you can find the documentation for the current released version.'
                />
                <VersionsTable versions={[latestVersion]} />
                <VersionsIntro
                    header='Next version (Unreleased)'
                    description='Here, you can find the documentation for the work-in-progress, unreleased version.'
                />
                <VersionsTable versions={[nextVersion]} />
                <VersionsIntro
                    header='Past versions'
                    description='Here, you can find the documentation for previous versions of Reviewpad.'
                />
                <VersionsTable versions={pastVersions} />
            </main>
        </Layout>
    )
}
