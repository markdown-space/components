import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'https://esm.sh/reactstrap'

import { useEffect, useState } from 'react'

type Doc = {
  id: string
  name: string
  slug: string
  published_content: string
  created_at: string
  updated_at: string
  published_at: string
  metadata: {
    [key: string]: any
  }
}

const Post = (doc: Doc) => {
  return (
    <h3 key={doc.id}>
      <a href={`https://pages.markdown.space/home/${doc.slug}`}>{doc.name}</a>
      {doc.metadata?.short_description
        ? ' - ' + doc.metadata?.short_description
        : ''}
    </h3>
  )
}

type TableOfContentsProps = {
  projectSlug: string
  post?: (doc: Doc) => JSX.Element | undefined
  pageLength?: number
  order?: string
  filter?: string
}

export const TableOfContents = ({
  post,
  projectSlug,
  pageLength = 10,
  order = 'published_at.desc',
  filter,
}: TableOfContentsProps) => {
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)
  const [docs, setDocs] = useState([])
  useEffect(() => {
    fetch(
      `https://api.markdown.space/projects/${projectSlug}?offset=${offset}&limit=${
        pageLength - 1
      }&order=${order}${filter ? `&filter=${filter}` : ''}`,
    ).then(async (response) => {
      setTotal(
        Number(response.headers.get('content-range')?.split('/')[1]) || 0,
      )
      const _data = await response.json()
      if (_data.docs?.length) setDocs(_data.docs)
    })
  }, [projectSlug, offset, pageLength, order])

  return (
    <>
      {docs.map(post || Post)}
      <Pagination>
        <PaginationItem disabled={offset == 0}>
          <PaginationLink
            first
            href="#"
            onClick={() => {
              setOffset(0)
            }}
          />
        </PaginationItem>
        <PaginationItem disabled={offset == 0}>
          <PaginationLink
            href="#"
            previous
            onClick={() => {
              setOffset(offset - pageLength)
            }}
          />
        </PaginationItem>
        {new Array(Math.ceil(total / pageLength)).fill(0).map((_, i) => {
          return (
            <PaginationItem key={i} active={offset === i * pageLength}>
              <PaginationLink
                href="#"
                onClick={() => {
                  setOffset(i * pageLength)
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem disabled={offset >= total - pageLength}>
          <PaginationLink
            href="#"
            next
            onClick={() => {
              setOffset(offset + pageLength)
            }}
          />
        </PaginationItem>
        <PaginationItem disabled={offset >= total - pageLength}>
          <PaginationLink
            href="#"
            last
            onClick={() => {
              setOffset(total - pageLength)
            }}
          />
        </PaginationItem>
      </Pagination>
      <small>
        {offset + 1} - {Math.min(offset + pageLength, total)} of {total}
      </small>
    </>
  )
}
