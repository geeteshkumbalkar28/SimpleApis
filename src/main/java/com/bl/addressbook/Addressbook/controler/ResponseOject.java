package com.bl.addressbook.Addressbook.controler;

public class ResponseOject {
    private String status;
    private String response;

    public ResponseOject(String status, String response) {
        this.status = status;
        this.response = response;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
