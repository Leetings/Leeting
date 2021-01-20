package com.leeting.myapp.model;

public class ContentDto {
    private int contentno;

    private String writer; // member id

    private String date;

    private String detail;

    private String filepath;

    private int categoryno;

    public ContentDto(int contentno, String writer, String date, String detail, String filepath, int categoryno) {
        this.contentno = contentno;
        this.writer = writer;
        this.date = date;
        this.detail = detail;
        this.filepath = filepath;
        this.categoryno = categoryno;
    }

    public int getContentno() {
        return contentno;
    }

    public void setContentno(int contentno) {
        this.contentno = contentno;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getFilepath() {
        return filepath;
    }

    public void setFilepath(String filepath) {
        this.filepath = filepath;
    }

    public int getCategoryno() {
        return categoryno;
    }

    public void setCategoryno(int categoryno) {
        this.categoryno = categoryno;
    }
}
