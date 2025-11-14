const MillenniumComicsCode =  `
package com.xmiguel.millenniumcomics;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Comic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String publisher;
    private String character;
    private String author;
    private String seriesIssue;
    private Integer issueYear;
    private Integer seriesYearStart;
    private Integer seriesYearEnd;
    private Long totalIssues;
    @Column(length = 1000)
    private String cover;
    @Column(length = 5000)
    private String summary;
    private double sale;
    private LocalDate releaseDate = LocalDate.now();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

public String getTitle() { return title; }
public void setTitle(String title) { this.title = title; }

public String getPublisher() { return publisher; }
public void setPublisher(String publisher) { this.publisher = publisher; }

public String getCharacter() { return character; }
public void setCharacter(String character) { this.character = character; }

public String getAuthor() { return author; }
public void setAuthor(String author) { this.author = author; }

public String getSeriesIssue() { return seriesIssue; }
public void setSeriesIssue(String seriesIssue) { this.seriesIssue = seriesIssue; }

public Integer getIssueYear() { return issueYear; }
public void setIssueYear(Integer issueYear) { this.issueYear = issueYear; }

public Integer getSeriesYearStart() { return seriesYearStart; }
public void setSeriesYearStart(Integer seriesYearStart) { this.seriesYearStart = seriesYearStart; }

public Integer getSeriesYearEnd() { return seriesYearEnd; }
public void setSeriesYearEnd(Integer seriesYearEnd) { this.seriesYearEnd = seriesYearEnd; }

public Long getTotalIssues() { return totalIssues; }
public void setTotalIssues(Long totalIssues) { this.totalIssues = totalIssues; }

public String getCover() { return cover; }
public void setCover(String cover) { this.cover = cover; }

public String getSummary() { return summary; }
public void setSummary(String summary) { this.summary = summary; }

public double getSale() { return sale; }
public void setSale(double sale) { this.sale = sale; }

public LocalDate getReleaseDate() { return releaseDate; }
public void setReleaseDate(LocalDate releaseDate) { this.releaseDate = releaseDate; }
}`;

export default MillenniumComicsCode;